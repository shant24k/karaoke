import { Injectable } from '@angular/core';

import { Song } from './song.interface'

@Injectable()
export class SongsService {

  constructor() { }

  private readonly songList: Song[] = [
    // {
    //   artist: 'Rick Astley',
    //   title: 'Never Gonna Give You Up',
    //   audio: 'assets/songs/never-gonna-give-you-up/never-gonna-give-you-up.mp3',
    //   lyrics: 'assets/songs/never-gonna-give-you-up/never-gonna-give-you-up.lrc',
    //   lyricDelay: 1,
    // },
    // {
    //   artist: 'Journey',
    //   title: 'Don\'t Stop Believing',
    //   audio: 'assets/songs/dont-stop-believing/dont-stop-believing.mp3',
    //   lyrics: 'assets/songs/dont-stop-believing/dont-stop-believing.lrc',
    //   lyricDelay: 1,
    // },
    {
      artist: '50 Cent',
      title: 'In da club',
      audio: 'assets/songs/in-da-club/in-da-club.mp3',
      lyrics: 'assets/songs/in-da-club/in-da-club.lrc',
      lyricDelay: 1,
    },
    {
      artist: 'Bryan Adams',
      title: 'Summer of 69',
      audio: 'assets/songs/summer-of-69/summer-of-69.mp3',
      lyrics: 'assets/songs/summer-of-69/summer-of-69.lrc',
      lyricDelay: 1,
    },
    {
      artist: 'Bruno Mars',
      title: 'Locked out of heaven',
      audio: 'assets/songs/locked-out-of-heaven/locked-out-of-heaven.mp3',
      lyrics: 'assets/songs/locked-out-of-heaven/locked-out-of-heaven.lrc',
      lyricDelay: 1,
    },
    {
      artist: 'Ed Sheeran',
      title: 'Thinking out loud',
      audio: 'assets/songs/thinking-out-loud/thinking-out-loud.mp3',
      lyrics: 'assets/songs/thinking-out-loud/thinking-out-loud.lrc',
      lyricDelay: 1,
    },
    {
      artist: 'Kailash Kher',
      title: 'Teri Deewani',
      audio: 'assets/songs/teri-deewani/teri-deewani.mp3',
      lyrics: 'assets/songs/teri-deewani/teri-deewani.lrc',
      lyricDelay: 1,
    }
  ]

  getSongList() {
    return this.songList
  }

}
