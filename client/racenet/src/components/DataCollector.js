// import axios from 'axios';


// export function getuserData(){
// let uid = this.props.match.params.id
// let getuserConfig = {
//   method: 'GET',
//   url: `http://localhost:8080/user/${uid}`
// }
// axios(getuserConfig)
//   .then((res) => {
//     this.setState({
//       userData:res.data,
//       userPics:res.data.pictures,
//       userPastEvents:res.data.pastEvents,
//       upcomingEvents: res.data.upcomingEventsArray
//     })
//     console.log(this.state.upcomingEvents)
//     let upcomingIds = this.state.upcomingEvents
//     let upcomingObjs = []
//     upcomingIds.map((id) => {
//       let getEvnConfig = {
//         method: 'GET',
//         url: `http://localhost:8080/events/${id}`
//       }
//       axios(getEvnConfig)
//           .then((rez) => {
//               let evnObj = rez.data
//               upcomingObjs.push(evnObj)
//               this.setState({upcomingEvents: upcomingObjs})
//               console.log(this.state.upcomingEvents)
//           })
//           .catch((err) => {
//               console.log(err)
//           })
//     })
//   })
//   .catch((err) => {
//     console.log(err)
//   })
// }

// module.exports = getuserData();