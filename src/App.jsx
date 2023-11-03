import Card from "./Card.jsx"

function App() {
const data = [

  {
    plan : "FREE",
    price : "0",

    user : "Single User",
    userEnabler : true,

    storage : "5 GB Storage",
    storageEnabler : true,

    publicprojects : "Unlimited Public Projects",
    publicprojectsEnabler : true,

    access : "Community Access",
    accessEnabler : true,

    privateprojects : "Unlimited Private Projects",
    privateprojectsEnabler : false,

    support : "Dedicated Phone Support",
    supportEnabler : false,

    subdomain : "Free Subdomain",
    subdomainEnabler : false,

    reports : "Monthly Status Reports",
    reportsEnabler : false,
  },

  {
    plan : "PLUS",
    price : "9",

    user : "5 Users",
    userEnabler : true,

    storage : "50 GB Storage",
    storageEnabler : true,

    publicprojects : "Unlimited Public Projects",
    publicprojectsEnabler : true,

    access : "Community Access",
    accessEnabler : true,

    privateprojects : "Unlimited Private Projects",
    privateprojectsEnabler : true,

    support : "Dedicated Phone Support",
    supportEnabler : true,

    subdomain : "Free Subdomain",
    subdomainEnabler : true,

    reports : "Monthly Status Reports",
    reportsEnabler : false,
  },

  {
    plan : "PRO",
    price : "49",

    user : "Unlimited Users",
    userEnabler : true,

    storage : "150 GB Storage",
    storageEnabler : true,

    publicprojects : "Unlimited Public Projects",
    publicprojectsEnabler : true,

    access : "Community Access",
    accessEnabler : true,

    privateprojects : "Unlimited Private Projects",
    privateprojectsEnabler : true,

    support : "Dedicated Phone Support",
    supportEnabler : true,

    subdomain : "Unlimited Free Subdomains",
    subdomainEnabler : true,

    reports : "Monthly Status Reports",
    reportsEnabler : true,
  }

]

  return (

    <>
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            {
              data.map((e,i) => {
                return <Card data = {e} key = {i}/>
              })
            }
          </div>
        </div>
      </section>
    </>

  )
}

export default App
