


export default class Scramble {
    _el: HTMLDivElement | null
    _text: string
    _scrambletext: string

    constructor(el: HTMLDivElement | null, text: string) {
        this._el = el
        this._text = text
        this._scrambletext = text
    }

    // set text set the initial text we want to finish with
    // and furhter appends noise to the end, 
    // such that the scramble effect can be accomplished.
    async run(upper: boolean) {
        if(this._el == null) {
            return
        }
        const actualtext = this._text
        let noisetext = this.generateNoise(actualtext.length, upper)
        // take oldtext,
        // apply update
        // and set newtext
        for(let i = 0; i< actualtext.length; i++) {
            noisetext = this.replaceCharAt(noisetext, actualtext.charAt(i), i)
            await this.sleep(100)
            this._el.innerText = noisetext
        }
    }

    
    private generateNoise(len: number, upper: boolean) {
        let res = ""
        let chars = ""
        if(upper){
            chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/*-+!§$%&/()=?"
        } else {
            chars = "abcdefghijklmnopqrstuvwxyz0123456789/*-+!§$%&/()=?"
        }

        for(let i = 0; i < len; i++) {
            const random = Math.floor(Math.random() * len);
            res += chars.charAt(random)
        }

        return res
    }

    // i cant believe i have to do this
    private replaceCharAt(text: string, repl: string,  index: number): string {
        if(index < 0 || text.length <= index) {
            throw new Error("no buenso senior. the index is out of bounds")
        }
        return text.substring(0, index) + repl + text.substring(index + 1)
    }
    
    // sleep function because setTimeout only works with promises
    private sleep(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms))
    }
}