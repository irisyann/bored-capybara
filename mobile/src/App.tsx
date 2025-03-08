import { useCallback, useState } from '@lynx-js/react'

import './App.css'
import activities from './assets/activities.json' assert { type: "json" };
import Bath from "./assets/capybaras/bath.png";
import Burger from "./assets/capybaras/burger.png";
import Chicken from "./assets/capybaras/chicken.png";
import Cook from "./assets/capybaras/cook.png";
import Donut from "./assets/capybaras/donut.png";
import Doomscroll from "./assets/capybaras/doomscroll.png";
import Drink from "./assets/capybaras/drink.png";
import Icecream from "./assets/capybaras/icecream.png";
import Instrument from "./assets/capybaras/instrument.png";
import Journal from "./assets/capybaras/journal.png";
import Letter from "./assets/capybaras/letter.png";
import Paint from "./assets/capybaras/paint.png";
import Poop from "./assets/capybaras/poop.png";
import Potion from "./assets/capybaras/potion.png";
import Read from "./assets/capybaras/read.png";
import Sleep from "./assets/capybaras/sleep.png";
import Stroll from "./assets/capybaras/stroll.png";
import Main from "./assets/capybaras/main.png";

export function App() {
  const [activity, setActivity] = useState({
    name: '',
    title: '',
    description: '',
    image: './assets/capybaras/main.png',
  })
  const [startedGenerating, setStartedGenerating] = useState(false)
  
  const getRandomActivity = useCallback(() => {
    const activity = activities[Math.floor(Math.random() * activities.length)]
    setActivity(activity)
    setStartedGenerating(true)
  }, [activity, startedGenerating])

  const landingImage = Main;
  const images: Record<string, string> = {
    Bath,
    Burger,
    Chicken,
    Cook,
    Donut,
    Doomscroll,
    Drink,
    Icecream,
    Instrument,
    Journal,
    Letter,
    Paint,
    Poop,
    Potion,
    Read,
    Sleep,
    Stroll,
  };

  return (
    <view>
      <view className='Background' />
      <view className='App'>
        <view className='Content'>
          <view className='Capybara'>
            <image src={startedGenerating ? images[activity.name] : landingImage} mode="aspectFit" className='CapybaraImage' />
            <text className='Title'>{activity.title}</text>
            <text className='Description'>{activity.description}</text>
          </view>
        </view>
        <view className='Banner'>
          <text className='Subheader'>Bored?</text>
          <text className='Subheader'>Let Capy tell you what to do.</text>
          <view className='Button' bindtap={getRandomActivity}>
              <text className='ButtonText'>Tap me</text>
          </view>
        </view>
      </view>
    </view>
  )
}
