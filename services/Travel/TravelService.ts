import API_ROOT from '../../constants'
import axios from 'axios'

class TravelService {
  static list = () => {
      const queryApi = `
      {
          launchesPast(limit: 10) {
            mission_name
            launch_date_local
            launch_site {
              site_name_long
            }
            links {
              article_link
              flickr_images
            }
            rocket {
              rocket_name
          }
        }
      }
      `
    return axios.post(API_ROOT, { query: queryApi })
  }
}

export default TravelService