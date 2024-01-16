export async function GET(req) {
    try {
        axios.get('https://airbnb-com1.p.rapidapi.com/categories', {
            headers: {
                'X-RapidAPI-Key': '411167aadbmsheb1c90bad59cad1p16b98ejsn0d2ddd6e7755',
                'X-RapidAPI-Host': 'airbnb-com1.p.rapidapi.com'
              }
        })
        ret
    } catch (error) {
        
    }
    
}