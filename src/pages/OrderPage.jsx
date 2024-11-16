import Header from '../components/Header'

const OrderPage = () => {
	return (
		<div className='container mx-auto px-4 my-4'>
			<Header />
			<div className='main rounded-[50px] p-20 pb-[200px] mt-20'>
				<h1 className='text-5xl w-3/4 font-light'>
					Купите наш браслет, чтобы больше не волноваться за вашим ребенком
				</h1>
				<p className='mt-8 text-2xl w-1/2 font-light'>
					Купите наш браслет, чтобы больше не волноваться за вашим ребенком
				</p>
				<button className='py-3 px-8 rounded-2xl bg-[#F0501E] text-white mt-10'>
					Заказать браслет
				</button>
			</div>

			<footer className='mt-20'>
				<p>© 2024, SmartCore</p>
			</footer>
		</div>
	)
}

export default OrderPage
