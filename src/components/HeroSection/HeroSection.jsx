import KaizenImage from '../../assets/Kaizen-Background.mp4'

export default function HeroSection() {
  return (
    <div className='main'>
        <div className="overlay"></div>
        <video src={KaizenImage} autoPlay loop muted/>
    </div>
  )
}
