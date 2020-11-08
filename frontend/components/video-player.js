import ReactPlayer from 'react-player'

export default class VideoPlayer extends ReactPlayer {
    render() {
        return <ReactPlayer
            url={this.props.video_url}
            controls
            playbackRate={2}
            width="896px"
            height="504px"
        />
    }
}
