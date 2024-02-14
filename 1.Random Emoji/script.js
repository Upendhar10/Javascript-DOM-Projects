let emoji = document.querySelector('#emoji');

const emoji_Array = [
  "😆", "😅", "🤣", "😂", "😀", "🤑", "🤨", "🙂", "😊", "😗", "😛", "😏", 
  "🤥", "😴", "🥺", "😧", "😇", "😳", "🙃", "🥴", "🧐", "🤨", "😒", "🤔" 
  "🤭", "🥰", "🤐", "😄", "🤔", "🤪", "🥲", "😃", "😁", "😬",
]

emoji.addEventListener("mouseover", function(){
    emoji.innerHTML = emoji_Array[Math.floor(Math.random()* emoji_Array.length)];
})

