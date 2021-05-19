class Marker {
    constructor (size, color, remainingInk)
    {
        this.size = size
        this.color = color
        this.remainingInk = remainingInk
    }
    
    write (str)
    {
        let returnstr = []
        let finished = false
        let i = 0
        while (this.remainingInk > 0 && i < str.length)
        {
            if (str[i] != ' ')
            {
                this.remainingInk -= 1
                returnstr.push(str[i])
                i += 1
            }
            else 
            {
                returnstr.push(str[i])
                i += 1
            }
        }
        return returnstr.join('')
    }
}

module.exports = Marker
