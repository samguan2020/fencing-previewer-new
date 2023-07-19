// @ts-nocheck
"use client";

import { Container, Grid, Paper, Typography, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, IconButton, Stack, Popover } from "@mui/material";
import { CloseOutlined as CloseIcon, ArrowBack } from "@mui/icons-material";
import { makeStyles } from '@mui/styles';
import ReactPlayer from "react-player";
import screenful from "screenfull";

import React, { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Controls from "./Controls";
import { Video } from "~/sanity/schemas/video";

const useStyles = makeStyles({
  playerWrapper: {
    width: "100%",

    position: "relative",
    // "&:hover": {
    //   "& $controlsWrapper": {
    //     visibility: "visible",
    //   },
    // },
  },

  controlsWrapper: {
    visibility: "hidden",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0,0,0,0.4)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  topControls: {
    display: "flex",
    justifyContent: "flex-end",
    padding: "4px",
  },
  middleControls: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomWrapper: {
    display: "flex",
    flexDirection: "column",

    // background: "rgba(0,0,0,0.6)",
    // height: 60,
    padding: "8px",
  },

  bottomControls: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    // height:40,
  },

  button: {
    margin: "4px",
  },
  controlIcons: {
    color: "#777",

    fontSize: 50,
    transform: "scale(0.9)",
    "&:hover": {
      color: "#fff",
      transform: "scale(1)",
    },
  },

  bottomIcons: {
    color: "#999",
    "&:hover": {
      color: "#fff",
    },
  },

  volumeSlider: {
    width: 100,
  },
});

const format = (seconds) => {
  if (isNaN(seconds)) {
    return `00:00`;
  }
  const date = new Date(seconds * 1000);
  const hh = date.getUTCHours();
  const mm = date.getUTCMinutes();
  const ss = date.getUTCSeconds().toString().padStart(2, "0");
  if (hh) {
    return `${hh}:${mm.toString().padStart(2, "0")}:${ss}`;
  }
  return `${mm}:${ss}`;
};

let count = 0;

interface Bookmark {
  subject: string;
  description: string;
  time: number;
  displayTime: string;
  image: string,
}

export default function VideoPlayer({
  video,
}: {
  video: Video
}) {
  const classes = useStyles();
  const [state, setState] = useState({
    pip: false,
    playing: true,
    controls: false,
    light: false,

    muted: true,
    played: 0,
    duration: 0,
    playbackRate: 1.0,
    volume: 1,
    loop: false,
    seeking: false,
  });

  const [timeDisplayFormat, setTimeDisplayFormat] = useState("normal");

  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedBookmarks = localStorage.getItem(`${video._id}:bookmarks`);
      setBookmarks(savedBookmarks ? JSON.parse(savedBookmarks) : []);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(`${video._id}:bookmarks`, JSON.stringify(bookmarks));
  }, [bookmarks]);

  const playerRef = useRef<any>(null);
  const playerContainerRef = useRef<any>(null);
  const controlsRef = useRef<any>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const {
    playing,
    controls,
    light,

    muted,
    loop,
    playbackRate,
    pip,
    played,
    seeking,
    volume,
  } = state;

  const handlePlayPause = () => {
    setState({ ...state, playing: !state.playing });
  };

  const handleRewind = () => {
    playerRef.current!.seekTo(playerRef.current.getCurrentTime() - 10);
  };

  const handleFastForward = () => {
    playerRef.current!.seekTo(playerRef.current.getCurrentTime() + 10);
  };

  const handleProgress = (changeState) => {
    if (count > 3) {
      controlsRef.current.style.visibility = "hidden";
      count = 0;
    }
    if (controlsRef.current.style.visibility == "visible") {
      count += 1;
    }
    if (!state.seeking) {
      setState({ ...state, ...changeState });
    }
  };

  const handleSeekChange = (e, newValue) => {
    console.log({ newValue });
    setState({ ...state, played: parseFloat(newValue / 100) });
  };

  const handleSeekMouseDown = (e) => {
    setState({ ...state, seeking: true });
  };

  const handleSeekMouseUp = (e, newValue) => {
    console.log({ value: e.target });
    setState({ ...state, seeking: false });
    // console.log(sliderRef.current.value)
    playerRef.current.seekTo(newValue / 100, "fraction");
  };

  const handleDuration = (duration) => {
    setState({ ...state, duration });
  };

  const handleVolumeSeekDown = (e, newValue) => {
    setState({ ...state, seeking: false, volume: parseFloat(newValue / 100) });
  };
  const handleVolumeChange = (e, newValue) => {
    // console.log(newValue);
    setState({
      ...state,
      volume: parseFloat(newValue / 100),
      muted: newValue === 0 ? true : false,
    });
  };

  const toggleFullScreen = () => {
    screenful.toggle(playerContainerRef.current);
  };

  const handleMouseMove = () => {
    controlsRef.current.style.visibility = "visible";
    count = 0;
  };

  const hanldeMouseLeave = () => {
    controlsRef.current.style.visibility = "hidden";
    count = 0;
  };

  const handleDisplayFormat = () => {
    setTimeDisplayFormat(
      timeDisplayFormat == "normal" ? "remaining" : "normal"
    );
  };

  const handlePlaybackRate = (rate: any) => {
    setState({ ...state, playbackRate: rate });
  };

  const hanldeMute = () => {
    setState({ ...state, muted: !state.muted });
  };

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');

  const sortBookmarksByTime = (bookmarks) => {
    return bookmarks.sort((a, b) => {
      return a.display.localeCompare(b.display, undefined, { numeric: true });
    });
  };

  const handleAddBookmark = () => {
    setState({ ...state, playing: false });
    setDialogOpen(true);
  };

  const handleCancel = () => {
    setState({ ...state, playing: true });

    setDialogOpen(false);
  };

  const handleConfirm = () => {
    const canvas = canvasRef.current!;
    canvas.width = 160;
    canvas.height = 90;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      playerRef.current.getInternalPlayer(),
      0,
      0,
      canvas.width,
      canvas.height
    );
    const dataUri = canvas.toDataURL();
    canvas.width = 0;
    canvas.height = 0;
    const bookmarksCopy = [...bookmarks];
    bookmarksCopy.push({
      subject: subject || 'Untitled',
      description,
      time: playerRef.current.getCurrentTime(),
      display: format(playerRef.current.getCurrentTime()),
      image: dataUri,
    });

    const sortedBookmarks = sortBookmarksByTime(bookmarksCopy);
    setBookmarks(sortedBookmarks);

    setDialogOpen(false);
    setSubject('');
    setDescription('');
  };

  const deleteBookmark = (event, index) => {
    event.stopPropagation();
    const updatedBookmarks = [...bookmarks];
    updatedBookmarks.splice(index, 1);
    setBookmarks(updatedBookmarks);

    setAnchorEl(null);
  };

  const currentTime =
    playerRef && playerRef.current
      ? playerRef.current.getCurrentTime()
      : "00:00";

  const duration =
    playerRef && playerRef.current ? playerRef.current.getDuration() : "00:00";
  const elapsedTime =
    timeDisplayFormat == "normal"
      ? format(currentTime)
      : `-${format(duration - currentTime)}`;

  const totalDuration = format(duration);

  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <Container maxWidth="md" className="mt-4">
      <header className="flex items-center my-4">
        <IconButton
          className="mr-2"
          onClick={handleGoBack}
          aria-label="Go back"
        >
          <ArrowBack />
        </IconButton>
        <h1 className="text-xl font-bold">{video.title}</h1>
      </header>
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={hanldeMouseLeave}
        ref={playerContainerRef}
        className={classes.playerWrapper}
      >
        {video.videoUrl ? (<ReactPlayer
          ref={playerRef}
          width="100%"
          height="100%"
          url={video.videoUrl}
          pip={pip}
          playing={playing}
          controls={false}
          light={light}
          loop={loop}
          playbackRate={playbackRate}
          volume={volume}
          muted={muted}
          onProgress={handleProgress}
          config={{
            file: {
              attributes: {
                crossorigin: "anonymous",
              },
            },
          }}
        />) :
          <div className="flex justify-center items-center h-64 bg-gray-200">Video not found</div>
        }


        <Controls
          ref={controlsRef}
          video={video}
          onSeek={handleSeekChange}
          onSeekMouseDown={handleSeekMouseDown}
          onSeekMouseUp={handleSeekMouseUp}
          onDuration={handleDuration}
          onRewind={handleRewind}
          onPlayPause={handlePlayPause}
          onFastForward={handleFastForward}
          playing={playing}
          played={played}
          elapsedTime={elapsedTime}
          totalDuration={totalDuration}
          onMute={hanldeMute}
          muted={muted}
          onVolumeChange={handleVolumeChange}
          onVolumeSeekDown={handleVolumeSeekDown}
          onChangeDispayFormat={handleDisplayFormat}
          playbackRate={playbackRate}
          onPlaybackRateChange={handlePlaybackRate}
          onToggleFullScreen={toggleFullScreen}
          volume={volume}
          onBookmark={handleAddBookmark}
        />
      </div>

      <Dialog open={dialogOpen} onClose={handleCancel}>
        <DialogTitle>Add Bookmark</DialogTitle>
        <DialogContent>
          <Stack spacing={2} className="mt-1">
            <TextField
              label="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              size="small"
              fullWidth
            />
            <TextField
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              size="small"
              fullWidth
              multiline
              rows={4}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button onClick={handleConfirm} color="primary">Confirm</Button>
        </DialogActions>
      </Dialog>

      {bookmarks.length > 0 && (<h2 className="mt-4 font-semibold text-md">Bookmarks</h2>)}

      <div className="mt-4 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {bookmarks.map((bookmark, index) => (
          <Grid key={index} item className="hover:cursor-pointer">
            <Paper
              className="relative group"
              onClick={() => {
                playerRef.current.seekTo(bookmark.time);
                controlsRef.current.style.visibility = "visible";

                setTimeout(() => {
                  controlsRef.current.style.visibility = "hidden";
                }, 1000);
              }}
              elevation={3}
              aria-owns={open ? 'mouse-over-popover' : undefined}
              aria-haspopup="true"
              onMouseEnter={handlePopoverOpen}
              onMouseLeave={handlePopoverClose}
            >
              <i
                className="absolute -top-3 -right-3 text-gray-500 opacity-0 group-hover:text-red-500 group-hover:opacity-100 transition cursor-pointer"
                onClick={(event) => deleteBookmark(event, index)}
              >
                <CloseIcon />
              </i>
              <img crossOrigin="anonymous" src={bookmark.image} className="w-full object-contain" />
              <Typography variant="body2" align="center">
                {bookmark.subject} at {bookmark.display}
              </Typography>

              <Popover
                id="mouse-over-popover"
                sx={{
                  pointerEvents: 'none',
                }}
                open={anchorEl !== null}
                anchorEl={anchorEl}
                onClose={handlePopoverClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
              >
                <Typography sx={{ p: 2 }} >
                  Subject: {bookmark.subject}
                  <br />
                  Description: {bookmark.description}
                  <br />
                  Time: {bookmark.display}
                  <br />
                </Typography>
              </Popover>
            </Paper>
          </Grid>
        ))}
      </div>
      <canvas ref={canvasRef} />
    </Container>
  );
}
