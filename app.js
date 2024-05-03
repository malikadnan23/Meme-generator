const APIKey = 'https://meme-api.com/gimme';

const generateMemebtn = document.querySelector('.generate-btn')
const memeImage = document.querySelector('.meme-generator img')
const memetitle = document.querySelector('.meme-title')
const memeauthor = document.querySelector('.meme-author')


const updateDetails= (url,title,author)=>{
    memeImage.setAttribute('src',url);
    memetitle.innerHTML = title;
    memeauthor.innerHTML= `author name: ${author}`
}

const generatememe = () =>{
    fetch(APIKey).then(Response=>
        Response.json()
    ).then(data =>
        updateDetails(data.url,data.title,data.author)
    )
}


generateMemebtn.addEventListener('click',generatememe)


generatememe()