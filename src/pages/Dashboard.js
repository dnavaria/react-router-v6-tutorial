
const Dashboard = ({user}) => {
  // const navigate = useNavigate();
  // const userFound = user ? true : false;
  // useEffect(()=>{
  //   if (userFound === false){
  //     navigate('/login')
  //     console.log(userFound)
  //   }
  // })
  return (
    <section className='section'>
      <h4>Dashboard</h4>
        <h5>Hello, {user?.name}</h5>
    </section>
  );
};
export default Dashboard;
