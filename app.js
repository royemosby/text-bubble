

function rotateQuotes(){
  
  let quotesIdx = 0
  
  const quotes = [ {scale: 1.5, text:'Wasps do it. Yellow jackets and bees do it. Even hornets in the trees do it. But that’s not the sting of love you’re feeling.'},
    {scale: 1.7, text:'Prohibition in 1920: Cases of cirrhosis plummet. Cases of moonshine proliferate.'},
    {scale:1.6, text: 'And then there are fire ants, popularly known in the Lowcountry as “Ow! Ow! Ow! Ow! Ow! Ow!"'},
    {scale: 1.1, text: 'You may have seen Samantha, the more social of the anteaters, walking nonchalantly on a leash down King Street. Henry has her in a diaper because, you know, and also because, well, you know. Kidding aside: anteater pee is skunky.'},
    {scale: 1.4, text: 'If your idea of hiking is a sweaty clamber to a mountain peak with sweeping valley views, dude, your GPS is broken. This is the Lowcountry.'},
    {scale: 1.5, text: 'Coonhounds are kings of the olfactory. Bred to track quarry, they are sometimes described as noses with dogs attached.'}
  ]

  return rotate = ()=>{
    const quote = document.querySelector("#quote")
    const quoteWidth = quote.getBoundingClientRect().width
    // 450 is CSS dependent
    const quoteScale = (quoteWidth/450) * quotes[quotesIdx].scale
  
    quote.innerHTML = `<p style="font-size:${quoteScale}rem">${quotes[quotesIdx].text}</p>`
    
    setTimeout(()=>{
      if(quotesIdx < quotes.length - 1){
        quotesIdx++
      } else {
        quotesIdx = 0;
      }
      rotate();
    },1000)

  };
}

rotateQuotes()()