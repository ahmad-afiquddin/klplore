import qs from 'qs'
const BASE_URL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3"
const YELP_API_KEY = "j0LUXihdC9xkNABzsSkjcyYWV5kliPUkprRSMm-iz5emlkCAr_DbOOzUBMhWtbcIio9vNBAaUik8VJgW3jPIcg0Ifxmowt6yKRBcxLxnpluAQODICiw66-wkmI1wXHYx"
export const searchBusiness = async(searchStr, location, category) =>
{
    const params = qs.stringify(
        {
            term:searchStr,
            latitude:location[0],
            longitude:location[1],
            categories:category
        }
    )
    
    console.log(params)
    
    const headers = new Headers(
        {
            'Authorization':`Bearer ${YELP_API_KEY}`,
        }
    )

    const response = await fetch(`${BASE_URL}/businesses/search?${params}`, {headers})
    
    if (!response.ok) return []

    const results = await response.json()
    return results.businesses || []
}