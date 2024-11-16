import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Header = () => {
	const navigate = useNavigate()
	const { pathname } = useLocation()
	const [isOrderPage, setIsOrderPage] = useState(false)

	useEffect(() => {
		setIsOrderPage(pathname === '/order')
	}, [pathname])

	return (
		<header className='h-10 w-full flex justify-between items-center py-2 px-10'>
			<div className='flex gap-4 items-center'>
				<div className='logo flex gap-1 items-center'>
					<div className='logo rounded-full bg-[#F0501E] w-5 h-5'></div>
					SmartCore
				</div>
				<select
					className='py-2 px-4 rounded-xl bg-[#ECEFF3]'
					name='language'
					id='language'
				>
					<option value='ru'>Русский</option>
					<option value='kz'>Казахский</option>
				</select>
			</div>
			<div className='flex gap-4 items-center'>
				{isOrderPage ? (
					<button
						onClick={() => navigate('/')}
						className='py-2 px-4 bg-[#ECEFF3] rounded-xl'
					>
						Для опекунов
					</button>
				) : (
					<button
						onClick={() => navigate('/order')}
						className='py-2 px-4 bg-[#ECEFF3] rounded-xl'
					>
						Для особенных людей
					</button>
				)}

				{isOrderPage ? (
					<button className='py-2 px-4 bg-[#F0501E] rounded-md text-white'>
						Заказать браслет
					</button>
				) : (
					<button className='py-2 px-4 bg-[#444444] rounded-md text-white'>
						Войти
					</button>
				)}
			</div>
		</header>
	)
}

export default Header
