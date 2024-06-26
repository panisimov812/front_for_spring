import React, {useState} from 'react';
import './PanemComponent.css';
import axios from "axios"; // Подключаем файл стилей для компонента

const PanemComponent = message => {
    const [account, setAccount] = useState('');
    const [level, setLevel] = useState('');
    const [banknotes, setBanknotes] = useState('');
    const [coins, setCoins] = useState('');
    const [compensation, setCompensation] = useState('');
    const [submitting, setSubmitting] = useState(false);

    const handleAccountChange = (accountValue) => {
        setAccount(accountValue.target.value)
    }

    const handleLevelChange = (e) => {
        setLevel(e.target.value);
    }

    const handleBanknotes = (e) => {
        setBanknotes(e.target.value)
    }

    const handleCoins = (e) => {
        setCoins(e.target.value)
    }

    const handleCompensation = (e) => {
        setCompensation(e.target.value)
    }

    const handleBanknoteSubmit = async (event) => {
        event.preventDefault();
        setSubmitting(true);
        try {
            const response = await axios.post(`http://localhost:8080/api/user-counter/banknotes/${account}`, {
                value: banknotes
            });
            console.log('Ответ сервера:', response.data);
            handleReset();
        } catch (error) {
            console.error('Ошибка при отправке данных:', error);
        }
        setTimeout(() => {
            setSubmitting(false);
        }, 6000);
    };

    const handleCoinSubmit = async (event) => {
        event.preventDefault();
        setSubmitting(true);
        try {
            const response = await axios.post(`http://localhost:8080/api/user-counter/coins/${account}`, {
                value: coins
            });
            console.log('Ответ сервера:', response.data);
            handleReset();
        } catch (error) {
            console.error('Ошибка при отправке данных:', error);
        }
        setTimeout(() => {
            setSubmitting(false);
        }, 6000);
    };

    const handleLevelSubmit = async (event) => {
        event.preventDefault();
        setSubmitting(true);
        try {
            const response = await axios.post(`http://localhost:8080/api/user-counter/level/${account}`, {
                value: level
            });
            console.log('Ответ сервера:', response.data);
            handleReset();
        } catch (error) {
            console.error('Ошибка при отправке данных;', error);
        }
        setTimeout(() => {
            setSubmitting(false);
        }, 6000)
    };

    const handleCompensationSubmit = async (event) => {
        event.preventDefault();
        setSubmitting(true);
        try {
            const response = await axios.post(`http://localhost:8080/api/user-counter/compensation/${account}`, {
                value: compensation
            });
            console.log('Ответ сервера:', response.data);
            handleReset();
        } catch (error) {
            console.error('Ошибка при отправке данных;', error);
        }
        setTimeout(() => {
            setSubmitting(false);
        }, 6000)
    };

    const handleButtonPlusThousandBanknotesClick = () => {
        if (!isNaN(banknotes) && banknotes !== '') {
            setBanknotes(parseInt(banknotes) + 1000);
        } else {
            setBanknotes(1000);
        }
    };

    const handleButtonPlusThousandCoinsClick = () => {
        if (!isNaN(coins) && coins !== '') {
            setCoins(parseInt(coins) + 1000);
        } else {
            setCoins(1000)
        }
    }

    const handleButtonPlusThousandCompensationClick = () => {
        if (!isNaN(compensation) && compensation !== '') {
            setCoins(parseInt(compensation) + 1000);
        } else {
            setCompensation(1000)
        }
    }

    const handleReset = () => {
        setAccount('');
        setLevel('');
        setBanknotes('');
        setCoins('');
        setCompensation('');
    };

    const handleSubmit = async (event) => {
        // Проверяем условия и отправляем соответствующие запросы
        if (banknotes !== '')  await handleBanknoteSubmit(event);
        if (coins !== '') await handleCoinSubmit(event);
        if (level !== '') await handleLevelSubmit(event);
        if (compensation !== '') await handleCompensationSubmit(event);
        }

        return (
            <form className="main_form" onSubmit={handleSubmit} onReset={handleReset}>
                <div>
                    <label htmlFor="account">Аккаунт:</label>
                    <input
                        type="account"
                        value={account}
                        onChange={handleAccountChange}
                        placeholder="Введите аккаунт"
                    />
                </div>
                <div>
                    <label htmlFor="level">Уровень:</label>
                    <input
                        type="level"
                        value={level}
                        onChange={handleLevelChange}
                        placeholder="Введите уровень"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="banknotes">Банкноты:</label>
                    <input
                        type="banknotes"
                        value={banknotes}
                        onChange={handleBanknotes}
                    />
                    <button type="button" className="btn btn-primary"
                            onClick={handleButtonPlusThousandBanknotesClick}>+1000
                    </button>
                </div>
                <div className="form-group">
                    <label htmlFor="coins">Монеты:</label>
                    <input
                        type="coins"
                        value={coins}
                        onChange={handleCoins}
                    />
                    <button type="button" className="btn btn-primary" onClick={handleButtonPlusThousandCoinsClick}>+1000
                    </button>
                </div>
                <div className="form-group">
                    <label htmlFor="compensation">Компенсация:</label>
                    <input
                        type="compensation"
                        value={compensation}
                        onChange={handleCompensation}
                    />
                    <button type="button" className="btn btn-primary"
                            onClick={handleButtonPlusThousandCompensationClick}>+1000
                    </button>
                </div>
                <div className="buttons">
                    <button type="submit" className={`btn btn-primary ${submitting ? 'disabled' : ''}`}
                            disabled={submitting}>Отправить
                    </button>
                    <button type="reset" className="btn">Сбросить</button>
                </div>
            </form>
        );
    };

    export default PanemComponent;