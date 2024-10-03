import React from "react";
import ReadmeImg from "./ReadmeImg";
import Text from "./Text";

export interface Props {
  cover?: string;
  track: string;
  artist: string;
  progress: number;
  duration: number;
  isPlaying: boolean;
  id: string;
}

export const Player: React.FC<Props> = ({
  cover,
  track,
  artist,
  progress,
  duration,
  isPlaying,
  id,
}) => {
  return (
    <ReadmeImg width="256" height="64">
      <style>
        {`
            .container {
              background-size: 5px 5px;
              background-image: linear-gradient(to right, #6B7D58 0.5px, transparent 0.5px), linear-gradient(to bottom, #6B7D58 0.5px, transparent 0.5px);
              background-color: #859B6D;

              font-family: Ari, monospace;
              text-shadow: 1px 1px .5px rgba(0, 0, 0, .5);
              z-index: 1;
            }

            .paused { 
              animation-play-state: paused !important;
              background: #49563b !important;
            }

            img:not([src]) {
              content: url("data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==");
              border-radius: 6px;
              background: #FFF;
              border: 1px solid #e1e4e8;
            }

            p {
              display: block;
              opacity: 0;
            }

            .progress-bar {
              position: relative;
              width: 100%;
              height: 4px;
              margin: -1px;
              border: 1px solid #49563b;
              border-radius: 4px;
              overflow: hidden;
              padding: 2px;
              z-index: 0;
            }

            #progress {
              position: absolute;
              top: -1px;
              left: 0;
              width: 100%;
              height: 6px;
              transform-origin: left center;
              background-color: black;
              animation: progress ${duration}ms linear;
              animation-delay: -${progress}ms;
            }
            
            .progress-bar,
            #track,
            #artist,
            #cover {
              opacity: 0;
              animation: appear 300ms ease-out forwards;
            }

            #track {
              animation-delay: 400ms;
            }
            #artist {
              animation-delay: 500ms;
            }
            .progress-bar {
              animation-delay: 550ms;
              margin-top: 4px;
            }

            #cover {
              animation-name: cover-appear;
              animation-delay: 300ms;
              box-shadow: 0 1px 3px rgba(0,0,0,0.1), 0 3px 10px rgba(0,0,0,0.05);
              image-rendering: pixelated;
              -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
              filter: grayscale(100%);
            }

            #cover:not([src]) {
              box-shadow: none;
            }

            @keyframes cover-appear {
              from {
                opacity: 0;
                transform: scale(0.8);
              }
              to {
                opacity: 1;
                transform: scale(1);
              }
            }

            @keyframes appear {
              from {
                opacity: 0;
                transform: translateX(-8px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }

            @keyframes progress {
              from {
                transform: scaleX(0)
              }
              to {
                transform: scaleX(1)
              }
            }

            a {
              color: #00000
            }
        `}
      </style>
      <div
        className={isPlaying ? "disabled container" : "container"}
        style={{
          display: "flex",
          alignItems: "center",
          paddingTop: 8,
          paddingBottom: 8,
          paddingLeft: 4,
          paddingRight: 4,
        }}
      >
        <img id="cover" src={cover ?? null} width="48" height="48" />
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            marginTop: -4,
            marginLeft: 8,
          }}
        >
          {track && (
            <a href={track ? `https://open.spotify.com/track/${id}` : ""}>
              <Text id="track" weight="bold">
                {`${track ?? ""} `.trim()}
              </Text>
            </a>
          )}
          <Text id="artist" color={!track ? "gray" : undefined}>
            {artist || "Nothing playing..."}
          </Text>
          {track && (
            <div className="progress-bar">
              <div id="progress" className={!isPlaying ? "paused" : ""} />
            </div>
          )}
        </div>
      </div>
    </ReadmeImg>
  );
};
