import './Block.css'

export default function Block() {
  return (
    <>
      <div className='block'>
        <span className='plus'>Top up deposit • $1,500.00</span>
        <span className='date'>16/05/2024</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, illo!</p>
      </div>
      <div className='block'>
        <span className='minus'>Withdraw deposit • $1,500.00</span>
        <span className='date'>16/05/2024</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, illo!</p>
      </div>
    </>
  )
}