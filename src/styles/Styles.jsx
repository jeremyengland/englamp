import styled from 'styled-components';

const Global = styled.div`
  font-family: 'Heebo', sans-serif;
  background-image: url('http://thepatternlibrary.com/img/u.png');
  width: 1925px;
  height: 2000px;
`

const TitleDiv = styled.div`
  background-color: #1C1C1C;
  font-size: 30px;
  color: white;
  padding-left: 15px;
  font-family: 'Bree Serif', serif;
`

const Title = styled.h1`
  margin: 0px;
  display: inline;
`

const ContentDiv = styled.div`
  background-color: #EBECF0;
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  position: absolute;
  top: 20%;
  left: 39%;
  display: inline-block;
`

const InputBtn = styled.input`
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 16px 32px;
  text-decoration: none;
  margin: 4px 2px;
  cursor: pointer;
  margin: auto;
  display: block;
  margin-top: 15px;
`

const InputForm = styled.input`
  border: 2px solid grey;
  border-radius: 4px;
  display: block;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
`

const SignUp = styled.p`
  float: right;
  margin: 0;
  margin-top: 10px;
  font-size: 80%;
  color: #606060;
`

const UserHeader = styled.div`
  float: right;
  padding-right: 20px;
  font-size: 70%;
  display: inline;
`

const UserProfilePic = styled.img`
  height: 25px;
`

const HeaderOptions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-right: 20px;
`

const LogoutBtn = styled.div`
  font-size: 70%;
  color: 	#585858;
`

const AlbumListDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #EBECF0;
  padding: 10px;
`

const AlbumArt = styled.img`
  height: 224px;
`

const AlbumDiv = styled.div`
  border: 3px;
  border-color: light-grey;
  padding: 20px;
  text-align: center;
`
const YourProjects = styled.div`
  margin-top: 20px;
  padding-right: 10px;
  padding-left: 10px;
  background-color: #EBECF0;
  margin-left: 250px;
  margin-right: 280px;
`

const SongListDiv = styled.div`
  background-color: #EBECF0;
  margin-left: 550px;
  margin-right: 580px;
  padding: 10px;
  text-align: center;
`

const LyricDiv = styled.div`
  background-color: #EBECF0;
  margin-left: 550px;
  margin-right: 580px;
  padding: 10px;
  text-align: center;
`

const SongTitleDiv = styled.div`
  border: 5px solid #1C1C1C;
  margin-bottom: 5px;
`

const IndLine = styled.p`
  display: inline-block;
  background-color: #1C1C1C;
  color: white;
  padding: 2px;
  margin: 0px;
  margin-top: 9px;
`

const Section = styled.p`
  font-weight: bold;
  size: 110%;
  display: inline-block;
  background-color: #FFA500;
  color: black;
  padding: 2px;
  margin: 0px;
  margin-top: 9px;
`

export {
  Global,
  TitleDiv,
  Title,
  ContentDiv,
  InputBtn,
  InputForm,
  SignUp,
  UserHeader,
  UserProfilePic,
  HeaderOptions,
  LogoutBtn,
  AlbumListDiv,
  AlbumArt,
  AlbumDiv,
  YourProjects,
  SongListDiv,
  LyricDiv,
  SongTitleDiv,
  IndLine,
  Section
}