import React, {useState} from 'react';
import './PanemComponent.css';
import axios from "axios"; // Подключаем файл стилей для компонента

const PanemComponent = message => {
  //  const [schema, setSchema] = useState('');
    const [account, setAccount] = useState('');
    const [level, setLevel] = useState('');
    const [banknotes, setBanknotes] = useState('')
    const [coins, setCoins] = useState('')

    // const handleSchemaChange = (schemaValue) => {
    //     setSchema(schemaValue.target.value);
    // };

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

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(`http://localhost:8080/api/user-counter/banknotes/${account}`, {
                value: banknotes
            });
            console.log('Ответ сервера:', response.data);
            handleReset();
        } catch (error) {
            console.error('Ошибка при отправке данных:', error);
        }
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

    const handleReset = () => {
       // setSchema('');
        setAccount('');
        setLevel('');
        setBanknotes('');
        setCoins('');
    };

    return (
        <form className="main_form" onSubmit={handleSubmit} onReset={handleReset}>
            {/*<div>*/}
            {/*    <label htmlFor="schema">Схема:</label>*/}
            {/*    <input*/}
            {/*        type="schema"*/}
            {/*        id="qa_schema_input_field"*/}
            {/*        value={schema}*/}
            {/*        onChange={handleSchemaChange}*/}
            {/*        placeholder="Введите схему"*/}
            {/*    />*/}
            {/*</div>*/}
            <div>
                <label htmlFor="account">Аккаунт:</label>
                <input
                    type="account"
                    id="qa_account_input_field"
                    value={account}
                    onChange={handleAccountChange}
                    placeholder="Введите аккаунт"
                />
            </div>
            <div>
                <label htmlFor="level">Уровень:</label>
                <input
                    type="level"
                    id="qa_level_input_field"
                    value={level}
                    onChange={handleLevelChange}
                    placeholder="Введите уровень"
                />
            </div>
            <div className="form-group">
                <label htmlFor="banknotes">Банкноты:</label>
                <input
                    type="banknotes"
                    id="qa_banknotes_input_field"
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
                    id="qa_coins_input_field"
                    value={coins}
                    onChange={handleCoins}
                />
                <button type="button" className="btn btn-primary"
                        onClick={handleButtonPlusThousandCoinsClick}>+1000
                </button>
            </div>

            <div className="buttons">
                <button type="submit" className="btn btn-primary">Отправить</button>
                <button type="reset" className="btn">Сбросить</button>
            </div>

        </form>
    );
};

export default PanemComponent;
