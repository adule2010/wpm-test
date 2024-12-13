'use client'

import { useState, useEffect, useRef } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { generateText, calculateWPM, calculateAccuracy, type Language, addLanguage, addWordsToLanguage, getAvailableLanguages, languages, type LanguagesType } from '@/utils/words'

export default function TypingTest() {
  const [text, setText] = useState('')
  const [input, setInput] = useState('')
  const [timeLeft, setTimeLeft] = useState(60)
  const [isActive, setIsActive] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)
  const [wpm, setWPM] = useState(0)
  const [accuracy, setAccuracy] = useState(0)
  const [charsPerMin, setCharsPerMin] = useState(0)
  const [language, setLanguage] = useState<keyof LanguagesType>('en')
  const [singleSentence, setSingleSentence] = useState(false)
  const [availableLanguages, setAvailableLanguages] = useState<[string, string][]>([])
  const inputRef = useRef<HTMLDivElement>(null)
  const timerRef = useRef<NodeJS.Timeout>()
  const startTimeRef = useRef<number>(0)
  const textGenerationTimeoutRef = useRef<NodeJS.Timeout>()
  const textContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setAvailableLanguages(getAvailableLanguages())
    if (!text) {
      setText(generateText(language, 5, singleSentence))
    }
  }, [language])

  useEffect(() => {
    if (isActive && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((time) => {
          if (time <= 1) {
            clearInterval(timerRef.current)
            setIsActive(false)
            setIsCompleted(true)
            return 0
          }
          return time - 1
        })
      }, 1000)
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isActive])

  const startTest = () => {
    if (!isActive) {
      setInput('')
      setTimeLeft(60)
      setIsActive(true)
      setIsCompleted(false)
      setWPM(0)
      setAccuracy(0)
      setCharsPerMin(0)
      startTimeRef.current = Date.now()
      inputRef.current?.focus()
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (isCompleted) {
      return
    }

    if (!isActive) {
      startTest()
      if (e.key.length === 1) {
        e.preventDefault()
        const newInput = e.key.toLowerCase()
        setInput(newInput)

        const correctChars = newInput === text[0] ? 1 : 0
        const elapsedTime = (Date.now() - startTimeRef.current) / 1000
        
        setWPM(calculateWPM(correctChars, elapsedTime))
        setAccuracy(calculateAccuracy(correctChars, 1))
        setCharsPerMin(Math.round((correctChars / elapsedTime) * 60))
      }
      return
    }

    if (e.key === 'Backspace') {
      e.preventDefault()
      setInput(prev => prev.slice(0, -1))
    } else if (e.key.length === 1) {
      e.preventDefault()
      const newInput = input + e.key.toLowerCase()
      setInput(newInput)

      const correctChars = [...newInput].filter((char, i) => char === text[i]).length
      const elapsedTime = (Date.now() - startTimeRef.current) / 1000
      
      setWPM(calculateWPM(correctChars, elapsedTime))
      setAccuracy(calculateAccuracy(correctChars, newInput.length))
      setCharsPerMin(Math.round((correctChars / elapsedTime) * 60))

      if (newInput.length >= text.length - 50) {
        if (textGenerationTimeoutRef.current) {
          clearTimeout(textGenerationTimeoutRef.current)
        }
        textGenerationTimeoutRef.current = setTimeout(() => {
          setText(prevText => prevText + " " + generateText(language, 3, singleSentence))
        }, 100)
      }
    }
  }

  const scrollToCurrentPosition = () => {
    if (textContainerRef.current) {
      const container = textContainerRef.current;
      const currentPosition = Math.floor(input.length / 80) * 24; // Přibližná výška řádku
      container.scrollTop = currentPosition;
    }
  };

  useEffect(() => {
    scrollToCurrentPosition();
  }, [input]);

  const renderText = () => {
    return text.split('').map((char, index) => {
      if (index >= input.length) return char
      const isCorrect = char === input[index]
      return (
        <span 
          key={index} 
          className={`transition-colors ${isCorrect ? 'text-green-500' : 'text-red-500'}`}
          style={{
            textShadow: isCorrect ? '0 0 5px rgba(0, 255, 0, 0.5)' : '0 0 5px rgba(255, 0, 0, 0.5)'
          }}
        >
          {char}
        </span>
      )
    })
  }

  const AddLanguageDialog = () => {
    const [newLangCode, setNewLangCode] = useState('')
    const [newLangName, setNewLangName] = useState('')
    const [newLangWords, setNewLangWords] = useState('')

    const handleAddLanguage = () => {
      if (newLangCode && newLangName && newLangWords) {
        addLanguage(newLangCode, newLangName, newLangWords.split(',').map(w => w.trim()))
        setAvailableLanguages(getAvailableLanguages())
        setNewLangCode('')
        setNewLangName('')
        setNewLangWords('')
      }
    }

    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">add new language</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>add new language</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Input
              placeholder="language code (e.g., fr)"
              value={newLangCode}
              onChange={(e) => setNewLangCode(e.target.value)}
            />
            <Input
              placeholder="language name (e.g., french)"
              value={newLangName}
              onChange={(e) => setNewLangName(e.target.value)}
            />
            <Input
              placeholder="words (comma-separated)"
              value={newLangWords}
              onChange={(e) => setNewLangWords(e.target.value)}
            />
            <Button onClick={handleAddLanguage}>add language</Button>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  const AddWordsDialog = () => {
    const [newWords, setNewWords] = useState('')

    const handleAddWords = () => {
      if (newWords) {
        addWordsToLanguage(language, newWords.split(',').map(w => w.trim()))
        setNewWords('')
        setText(generateText(language, 5, singleSentence))
      }
    }

    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">add words to current language</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>add words to {languages[language]?.name}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Input
              placeholder="new words (comma-separated)"
              value={newWords}
              onChange={(e) => setNewWords(e.target.value)}
            />
            <Button onClick={handleAddWords}>add words</Button>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="max-w-3xl w-full space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">typing speed test</h1>
          <h2 className="text-6xl font-extrabold">test your typing skills</h2>
        </div>

        <div className="flex justify-center gap-12">
          <div className="text-center">
            <div className="text-5xl font-bold">{timeLeft}</div>
            <div className="text-sm text-muted-foreground">seconds</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold">{wpm}</div>
            <div className="text-sm text-muted-foreground">words/min</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold">{charsPerMin}</div>
            <div className="text-sm text-muted-foreground">chars/min</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold">{accuracy}</div>
            <div className="text-sm text-muted-foreground">% accuracy</div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Switch
                id="single-sentence"
                checked={singleSentence}
                onCheckedChange={setSingleSentence}
                disabled={isActive}
              />
              <Label htmlFor="single-sentence">single sentence mode</Label>
            </div>
            <Select
              value={language}
              onValueChange={(value: keyof LanguagesType) => setLanguage(value)}
              disabled={isActive}
            >
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Language" />
              </SelectTrigger>
              <SelectContent>
                {availableLanguages.map(([code, name]) => (
                  <SelectItem key={code} value={code}>{name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-between">
            <AddLanguageDialog />
            <AddWordsDialog />
          </div>

          <div 
            ref={textContainerRef}
            className="relative mb-4 p-4 bg-gray-50 rounded-lg text-lg max-h-[200px] overflow-y-auto"
            style={{
              lineHeight: '1.5',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word'
            }}
          >
            {renderText()}
          </div>

          <div 
            ref={inputRef}
            tabIndex={0}
            onKeyDown={handleKeyDown}
            className="h-[120px] p-4 text-lg font-mono border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 overflow-y-auto"
          >
            {isCompleted ? (
              <div className="text-center">
                <p className="text-xl font-semibold mb-2">test completed!</p>
                <p className="text-lg">
                  your final score: {wpm} wpm with {accuracy}% accuracy
                </p>
              </div>
            ) : (
              input
            )}
          </div>
          {!isActive && !isCompleted && (
            <div className="text-center text-muted-foreground">
              start typing to begin the test
            </div>
          )}
        </div>
      </div>
      {isCompleted && (
        <Button
          onClick={() => {
            setText(generateText(language, 5, singleSentence))
            startTest()
          }}
          className="bg-green-500 hover:bg-green-600 text-white"
        >
          Restart Test
        </Button>
      )}
    </div>
  )
}
