import CitiesDropdown from './CitiesDropdown';
import PageTitle from './PageTitle';

const Home = () => {

    const companies = [
        {
            id: 1,
            name: "ApexFoot"
        },
        {
            id: 2,
            name: "IDLC"
        },
        {
            id: 3,
            name: "CityBank"
        }
    ];

    function AlertMe(){
        alert('Clicked');
    }

  return (
    <div>
        Hello World
        <PageTitle title="Home Page"/>
        <CitiesDropdown/>

        <select>
            {
                companies.map((item) => {
                    return <option value={item.id.toString()} key={item.id.toString()}>{item.name}</option>
                }) 
            }
        </select>
        <br/>

        <button onClick={AlertMe}>Click Me</button>

    </div>
  )
}

export default Home
