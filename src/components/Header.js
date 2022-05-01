import React from 'react'
import { Input, Form } from 'semantic-ui-react'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import { useContext } from 'react'
import Store from '../store'
import './Header.css'

export const Header = () => {
    const [name, setName] = useState('')
    const OwnStore = useContext(Store)
    function subAndSearh() {
        OwnStore.handleSubmit(name)
        OwnStore.fetchUserInfo()
        OwnStore.fetchUserRepos()
    }
    return (
        <div class ="Header">
            <Form onSubmit={subAndSearh} >
                <Input
                
                    size='large'
                    value={name}
                    icon='users'
                    iconPosition='left'
                    placeholder='Search user Login in Github...'
                    onChange={(event) => { setName(event.target.value) }}
                />
            </Form>
        </div >
    )
}
export default observer(Header)
