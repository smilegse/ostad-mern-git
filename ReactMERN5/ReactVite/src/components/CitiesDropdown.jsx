
const CitiesDropdown = () => {
    let cities = ['Dhaka','Kolkata','Mumbai','Chennai','Khulna','Barishal']

  return (
    <div>
        <select>
            {
                cities.map((item,i) => {
                    return <option key={i.toString()}>{item}</option>
                })
            }
        </select>
    </div>
  )
}

export default CitiesDropdown
