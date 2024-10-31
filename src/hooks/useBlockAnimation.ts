import { useEffect, useState } from "react"

type BlockStyle = {
    left: string
    width: string
    height: string
    animationDelay: string
    animationDuration: string
}

export default function useBlockAnimation() {
    const [blocks, setBlocks] = useState<BlockStyle[]>([])

    useEffect(() => {
        setBlocks(generateBlocks())
    }, [])

    const generateBlocks = (): BlockStyle[] => {
        const numberOfBlocks = Math.floor(Math.random() * (15 - 10) + 10)
        const blocksArr = [...Array(numberOfBlocks).keys()]

        const allBlocksInfo = blocksArr.map((b) => {
            let left = (b + 1) * (Math.random() * 10)
            while (left >= 100) {
                left = left / 10
            }

            let size = left * (Math.random() * 100)
            size = Math.min(Math.max(size, 30), Math.random() * (150 - 50) + 50)

            const delay = (Math.random() * 2).toFixed(2)

            const randomDurationFactor = Math.random() * (1.5 - 0.8) + 0.8
            const baseDuration = size / 100 + randomDurationFactor
            const animationDuration = `${Math.max(
                baseDuration,
                Math.random() * (10 - 6) + 6
            ).toFixed(2)}s`

            return {
                left: `${Number(left.toFixed(2))}%`,
                width: `${Math.floor(size)}px`,
                height: `${Math.floor(size)}px`,
                animationDelay: `${delay}s`,
                animationDuration,
            }
        })

        const lastBlock = {
            left: `85%`,
            width: `150px`,
            height: `150px`,
            animationDelay: `0s`,
            animationDuration: `11s`,
        }
        allBlocksInfo.push(lastBlock)

        return allBlocksInfo
    }

    return { blocks }
}