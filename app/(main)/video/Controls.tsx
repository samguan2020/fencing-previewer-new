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
    color: "#999",

    size: 50,
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
          wrap="nowrap"
          justifyContent="space-between"
          style={{ padding: 12 }}
        >
          <Grid item className="opacity-0 sm:opacity-100">
            <h4 className="text-base text-white">    {video?.title}
            </h4>
          </Grid>
          <Grid item className="flex justify-self-end">
            <Button
              onClick={onBookmark}
              size="small"
              variant="contained"
              color="primary"
              startIcon={<BookmarkIcon />}
            >
              Bookmark
            </Button>
          </Grid>
        </Grid>
        {/* middle controls */}
        <Grid container direction="row" alignItems="center" justifyContent="center">
          <IconButton
            size="medium"
            onClick={onRewind}
            className={classes.controlIcons}
            aria-label="rewind"
          >
            <FastRewindIcon
              className={classes.controlIcons}
              size="medium"
            />
          </IconButton>
          <IconButton
            size="medium"
            onClick={onPlayPause}
            className={classes.controlIcons}
            aria-label="play"
          >
            {playing ? (
              <PauseIcon size="medium" className={classes.controlIcons} />
            ) : (
              <PlayArrowIcon size="medium" className={classes.controlIcons} />
            )}
          </IconButton>
          <IconButton
            size="medium"
            onClick={onFastForward}
            className={classes.controlIcons}
            aria-label="forward"
          >
            <FastForwardIcon size="medium" className={classes.controlIcons} />
          </IconButton>
        </Grid>
        {/* bottom controls */}
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          style={{ padding: 12 }}
          spacing={0}
        >
          {/* bottom progress */}
          <Grid item xs={12} >
            <Slider
              className="!py-2 md:!py-4"
              min={0}
              max={100}
              size="small"
              value={played * 100}
              onChange={onSeek}
              onMouseDown={onSeekMouseDown}
              onChangeCommitted={onSeekMouseUp}
              onDuration={onDuration}
            />
          </Grid>

          <div className="flex w-full">
            {/* bottom left */}
            <Grid item xs={8} className="flex items-center !py-0">
              <IconButton
                size="small"
                onClick={onPlayPause}
                className={classes.bottomIcons}
              >
                {playing ? (
                  <PauseIcon size="small" className={classes.controlIcons} />
                ) : (
                  <PlayArrowIcon size="small" className={classes.controlIcons} />
                )}
              </IconButton>

              <IconButton
                size="small"
                // onClick={() => setState({ ...state, muted: !state.muted })}
                onClick={onMute}
                className={`${classes.bottomIcons} ${classes.volumeButton}`}
              >
                {muted ? (
                  <VolumeMute size="small" className={classes.controlIcons} />
                ) : volume > 0.5 ? (
                  <VolumeUp size="small" className={classes.controlIcons} />
                ) : (
                  <VolumeDown size="small" className={classes.controlIcons} />
                )}
              </IconButton>

              <Slider
                min={0}
                max={100}
                size="small"
                value={muted ? 0 : volume * 100}
                onChange={onVolumeChange}
                aria-labelledby="input-slider"
                className={clsx('ml-2 mr-4', classes.volumeSlider)}
                onMouseDown={onSeekMouseDown}
                onChangeCommitted={onVolumeSeekDown}
              />

              <Button
                variant="text"
              >
                <Typography
                  variant="body1"
                  style={{ color: "#fff" }}
                >
                  {elapsedTime}/{totalDuration}
                </Typography>
              </Button>
            </Grid>

            {/* bottom right*/}
            <Grid item xs={4} className="flex justify-end  !py-0">
              <Button
                onClick={handleClick}
                aria-describedby={id}
                className={classes.bottomIcons}
                variant="text"
              >
                <span className="text-sm">
                  {playbackRate}X
                </span>
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
                <div className="flex flex-col-reverse items-center">
                  {[0.25, 0.5, 1, 1.5, 2].map((rate) => (
                    <Button
                      key={rate}
                      //   onClick={() => setState({ ...state, playbackRate: rate })}
                      onClick={() => onPlaybackRateChange(rate)}
                      variant="text"
                    >
                      <span
                        className="text-sm"
                        color={rate === playbackRate ? "secondary" : "inherit"}
                      >
                        {rate}X
                      </span>
                    </Button>
                  ))}
                </div>
              </Popover>
              <IconButton
                size="small"
                onClick={onToggleFullScreen}
                className={classes.bottomIcons}
              >
                <FullScreen size="small" className={classes.controlIcons} />
              </IconButton>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
});


export default Controls;
