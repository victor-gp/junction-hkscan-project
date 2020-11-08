import ReactPlayer from 'react-player'

const center_style = {
    display: "block",
    margin: "0 auto",
};


export default class VideoPlayer extends ReactPlayer {
    render() {
        return <ReactPlayer
            url={this.props.video_url}
            controls
            playbackRate={2}
            width="896px"
            height="504px"
            style={center_style}
        />
    }
}
