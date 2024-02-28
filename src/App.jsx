import VimeoPlayer from 'react-player/vimeo'

const DEFAULT_CONFIG = {
  youtube: {
    playerVars: {
      showinfo: false
    }
  },
  vimeo: {
    playerOptions: {
      title: false,
      sidedock: false
    }
  },
  file: {
    forceVideo: true
  }
};

function App() {
  const presets = {
    config: DEFAULT_CONFIG,
    controls: false,
    volume: 0.5,
    height: '100%',
    width: '100%',
    muted: true,
    loop: true,
    playing: true,
  };

  return (
    <>
      <h1>Текущий вариант:</h1>
      <iframe src='https://player.vimeo.com/video/916096750?title=0&byline=0&portrait=0&playsinline=0&muted=1&autoplay=1&autopause=0&controls=0&loop=1&app_id=122963' allow='autoplay; fullscreen; picture-in-picture' style={{ width: '100%', height: '100%' }}></iframe>
      <h1>Вариант с параметром playsinline:</h1>
      <iframe src='https://player.vimeo.com/video/916096750?title=0&byline=0&portrait=0&playsinline=1&muted=1&autoplay=1&autopause=0&controls=0&loop=1&app_id=122963' allow='autoplay; fullscreen; picture-in-picture' style={{ width: '100%', height: '100%' }}></iframe>
      <h1>Вариант с дефолтным параметром playsinline:</h1>
      <iframe src='https://player.vimeo.com/video/916096750?title=0&byline=0&portrait=0&muted=1&autoplay=1&autopause=0&controls=0&loop=1&app_id=122963' allow='autoplay; fullscreen; picture-in-picture' style={{ width: '100%', height: '100%' }}></iframe>
      <h1>Вариант с React Player:</h1>
      <VimeoPlayer url='https://vimeo.com/916096750' {...presets} />
      <h1>Вариант с React Player c playsinline:</h1>
      <VimeoPlayer url='https://vimeo.com/916096750' {...presets} playsinline />
    </>
  )
}

export default App
