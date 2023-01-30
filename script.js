const form = document.querySelector('#habits-form')
const nlwSetup = new NLWSetup(form)

const button = document.querySelector('header button')

button.addEventListener('click',add)
form.addEventListener('change', save)

function add(){
  const today = new Date().toLocaleDateString('pt-br').slice(0, 5)
  const dayExists = nlwSetup.dayExists(today)

  if(dayExists){
    alert("Dia já incluído")
    return
  }
  nlwSetup.addDay(today)
  alert("Dia incluído")
  
}

function save(){
  localStorage.setItem('nlwSetup@Habits',JSON.stringify(nlwSetup.data))
}
/*const data ={
  run: ['01-01','01-02','01-03'],
  foodfit: ['01-07','01-09'],
  book: ['01-11']


}*/
const data = JSON.parse(localStorage.getItem("nlwSetup@Habits")) || {}

nlwSetup.setData(data)
nlwSetup.load()