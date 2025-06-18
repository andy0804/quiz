import { FC } from 'react'
import HighlightedText from '../../ui/HighlightedText'

interface RightAnswerProps {
  correctAnswers: string[]
  choices: string[]
  explanation: string
  reading: string
}

const RightAnswer: FC<RightAnswerProps> = ({ correctAnswers, choices, explanation, reading }) => {
  console.log("explanation", explanation)
  console.log("reading", reading)
  return (
    <div>
      <p className="text-darker-grey mt-4 text-lg leading-[1.2] font-normal">
        {`Right ${correctAnswers.length < 2 ? 'Answer' : 'Answers'}: `}
        {correctAnswers.map((item: string, index: number) => {
          const label = String.fromCharCode(65 + choices.indexOf(item))

          return (
            <HighlightedText key={index} themeText>
              {`${label} (${item})${index !== correctAnswers.length - 1 ? ', ' : ''}`}
            </HighlightedText>
          )
        })}
      </p>
      {explanation && (
        <p className="text-darker-grey mt-2 text-base leading-[1.5] font-normal">
          <strong>Explanation:</strong> {explanation}
        </p>
      )}
      {reading && (
        <p className="text-darker-grey mt-2 text-base leading-[1.5] font-normal">
          <strong>Reading:</strong> {reading}
        </p>
      )}
    </div>
  )
}

export default RightAnswer
