import profile from'../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between max-w-7xl mx-auto p-5 border-b-2'>
            <h3 className='text-4xl font-bold text-black'>Knowledge Cafe</h3>
            <img className='w-14' src={profile} alt="" />
        </div>
    );
};

export default Header;