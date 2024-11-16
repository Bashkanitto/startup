import Header from './components/Header'

const carts = [
	{
		id: 1,
		icon: '/cartImage-1.png',
		title: 'Фотогейм',
		description:
			'Режим в котором вы будете выбирать по голосу правильные варианты ответа!',
	},
	{
		id: 2,
		icon: '/cartImage-2.png',
		title: 'Развитие разговорной речи',
		description:
			'Режим в котором вы будете повторять за искусственным интелектом!',
	},
	{
		id: 3,
		icon: '',
		title: 'Фотогейм',
		description:
			'Режим в котором вы будете выбирать по голосу правильные варианты ответа!',
	},
]

function App() {
	return (
		<div className='container mx-auto px-4 my-4'>
			<Header />
			<div className='main rounded-[50px] p-20 pb-[200px] mt-20 bg-[#E9EDFC]'>
				<h1 className='text-5xl w-3/4 font-light'>
					SmartCore - среда, где все получится: тренируйся, развивайся каждый
					день!
				</h1>
				<p className='mt-8 text-2xl w-1/2 font-light'>
					Удобный онлайн-платформа, который поможет развиваться. Специально для
					людей с инвалидностью.
				</p>
				<button className='py-3 px-8 rounded-2xl bg-[#F0501E] text-white mt-10'>
					К тестам
				</button>
			</div>

			<p className='text-secondary text-center mt-20'>наши тесты</p>
			<h2 className='text-4xl text-center'>
				Наши индивидуальные тесты помогут вам повышать навыки!
			</h2>
			<div className='carts mt-20 flex gap-4'>
				{carts.map(item => (
					<div
						className='bg-[#E9EDFC] rounded-[50px] flex flex-col gap-4 p-10'
						key={item.id}
					>
						<img className='w-[70px] h-[70px]' src={item.icon} alt='' />
						<h3 className='text-2xl'>{item.title}</h3>
						<p className='text-sm text-[#00000066]'>{item.description}</p>
						<button className='bg-[#F0501E] py-2 text-white rounded-2xl w-[200px]'>
							Начать
						</button>
					</div>
				))}
			</div>
			<footer className='mt-20'>
				<p>© 2024, Хелпа</p>
			</footer>
		</div>
	)
}

export default App
