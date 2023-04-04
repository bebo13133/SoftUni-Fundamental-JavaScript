function santaSecretHelper(arr) {
    arr.pop()
    let key = arr.shift()
    let pattern = /\@(?<name>[A-z]+)[^\@\-\!\:\>]*\!(?<status>[G])\!/g
  
    for (const word of arr) {
      let decryption = [...word].map(el => String.fromCharCode(el.charCodeAt() - key)).join('')
      let result = [...decryption.matchAll(pattern)]
      if (result[0] !== undefined) {
        if (/^/.test(result[0])) result = String(result[0][1]).match(/^\w+\b/)
        console.log(result[0])
      }
    }
  }