// @ts-nocheck

"use client"

import React, { forwardRef, useState } from "react";
import clsx from 'clsx'
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import FastForwardIcon from "@mui/icons-material/FastForward";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import Slider from "@mui/material/Slider";
import Tooltip from "@mui/material/Tooltip";
import Grid from "@mui/material/Grid";
import VolumeUp from "@mui/icons-material/VolumeUp";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeMute from "@mui/icons-material/VolumeOff";
import FullScreen from "@mui/icons-material/Fullscreen";
import Popover from "@mui/material/Popover";
import { Video } from "~/types";
import { styled } from '@mui/material/styles'
import { withStyles } from 'tss-react/mui';

const useStyles = makeStyles({
  controlsWrapper: {
    visibility: "hidden",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: "100%",
    background: "rgba(0,0,0,0.6)",
    display: "flex",
    flexDirection: "column",
    justifyContentContent: "space-between",
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

const PrettoSlider = withStyles(Slider, (theme) => ({

}));

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}


interface ControlsProps {
  video?: Video
  onSeek?: (...args: any[]) => void;
  onSeekMouseDown?: (...args: any[]) => void;
  onSeekMouseUp?: (...args: any[]) => void;
  onDuration?: (...args: any[]) => void;
  onRewind?: (...args: any[]) => void;
  onPlayPause?: (...args: any[]) => void;
  onFastForward?: (...args: any[]) => void;
  onVolumeSeekDown?: (...args: any[]) => void;
  onChangeDispayFormat?: (...args: any[]) => void;
  onPlaybackRateChange?: (...args: any[]) => void;
  onToggleFullScreen?: (...args: any[]) => void;
  onMute?: (...args: any[]) => void;
  playing?: boolean;
  played?: number;
  elapsedTime?: string;
  totalDuration?: string;
  muted?: boolean;
  playbackRate?: number;
  volume: number;
  onVolumeChange?: (...args: any[]) => void,
  onBookmark?: (...args: any[]) => void,
}


// eslint-disable-next-line react/display-name
const Controls = React.forwardRef((
  {
    video,
    onSeek,
    onSeekMouseDown,
    onSeekMouseUp,
    onDuration,
    onRewind,
    onPlayPause,
    onFastForward,
    playing,
    played,
    elapsedTime,
    totalDuration,
    onMute,
    muted,
    onVolumeSeekDown,
    onChangeDispayFormat,
    playbackRate,
    onPlaybackRateChange,
    onToggleFullScreen,
    volume,
    onVolumeChange,
    onBookmark,
  }: ControlsProps,
  ref
) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div ref={ref} className={classes.controlsWrapper}>
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        style={{ flexGrow: 1 }}
      >
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          style={{ padding: 16 }}
        >
          <Grid item>
            <Typography variant="h5" style={{ color: "#fff" }}>
              {video?.title}
            </Typography>
          </Grid>
          <Grid item>
            <Button
              onClick={onBookmark}
              variant="contained"
              color="primary"
              startIcon={<BookmarkIcon />}
            >
              Bookmark
            </Button>
          </Grid>
        </Grid>
        <Grid container direction="row" alignItems="center" justifyContent="center">
          <IconButton
            onClick={onRewind}
            className={classes.controlIcons}
            aria-label="rewind"
          >
            <FastRewindIcon
              className={classes.controlIcons}
              fontSize="medium"
            />
          </IconButton>
          <IconButton
            onClick={onPlayPause}
            className={classes.controlIcons}
            aria-label="play"
          >
            {playing ? (
              <PauseIcon fontSize="medium" className={classes.controlIcons} />
            ) : (
              <PlayArrowIcon fontSize="medium" className={classes.controlIcons} />
            )}
          </IconButton>
          <IconButton
            onClick={onFastForward}
            className={classes.controlIcons}
            aria-label="forward"
          >
            <FastForwardIcon fontSize="medium" className={classes.controlIcons} />
          </IconButton>
        </Grid>
        {/* bottom controls */}
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          style={{ padding: 16 }}
        >
          <Grid item xs={12}>
            <PrettoSlider
              min={0}
              max={100}
              aria-label="custom thumb label"
              value={played * 100}
              onChange={onSeek}
              onMouseDown={onSeekMouseDown}
              onChangeCommitted={onSeekMouseUp}
              onDuration={onDuration}
            />
          </Grid>

          <Grid item>
            <div className="flex items-center ">
              <IconButton
                onClick={onPlayPause}
                className={classes.bottomIcons}
              >
                {playing ? (
                  <PauseIcon fontSize="medium" className={classes.controlIcons} />
                ) : (
                  <PlayArrowIcon fontSize="medium" className={classes.controlIcons} />
                )}
              </IconButton>

              <IconButton
                // onClick={() => setState({ ...state, muted: !state.muted })}
                onClick={onMute}
                className={`${classes.bottomIcons} ${classes.volumeButton}`}
              >
                {muted ? (
                  <VolumeMute fontSize="medium" className={classes.controlIcons} />
                ) : volume > 0.5 ? (
                  <VolumeUp fontSize="medium" className={classes.controlIcons} />
                ) : (
                  <VolumeDown fontSize="medium" className={classes.controlIcons} />
                )}
              </IconButton>

              <Slider
                min={0}
                max={100}
                value={muted ? 0 : volume * 100}
                onChange={onVolumeChange}
                aria-labelledby="input-slider"
                className={clsx('ml-2 mr-4', classes.volumeSlider)}
                onMouseDown={onSeekMouseDown}
                onChangeCommitted={onVolumeSeekDown}
              />

              <Button
                variant="text"
                onClick={
                  onChangeDispayFormat
                  //     () =>
                  //   setTimeDisplayFormat(
                  //     timeDisplayFormat == "normal" ? "remaining" : "normal"
                  //   )
                }
              >
                <Typography
                  variant="body1"
                  style={{ color: "#fff", marginLeft: 16 }}
                >
                  {elapsedTime}/{totalDuration}
                </Typography>
              </Button>
            </div>
          </Grid>

          <Grid item>
            <Button
              onClick={handleClick}
              aria-describedby={id}
              className={classes.bottomIcons}
              variant="text"
            >
              <Typography>{playbackRate}X</Typography>
            </Button>

            <Popover
              container={ref.current}
              open={open}
              id={id}
              onClose={handleClose}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <Grid container direction="column-reverse">
                {[0.25, 0.5, 1, 1.5, 2].map((rate) => (
                  <Button
                    key={rate}
                    //   onClick={() => setState({ ...state, playbackRate: rate })}
                    onClick={() => onPlaybackRateChange(rate)}
                    variant="text"
                  >
                    <Typography
                      color={rate === playbackRate ? "secondary" : "inherit"}
                    >
                      {rate}X
                    </Typography>
                  </Button>
                ))}
              </Grid>
            </Popover>
            <IconButton
              onClick={onToggleFullScreen}
              className={classes.bottomIcons}
            >
              <FullScreen fontSize="medium" className={classes.controlIcons} />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
});


export default Controls;
