import React from 'react'
import { Input, Form } from 'semantic-ui-react'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import { useContext } from 'react'
import Store from '../store'

export const Header = () => {
    const [name, setName] = useState('')
    const OwnStore = useContext(Store)
    function subAndSearh() {
        OwnStore.handleSubmit(name)
        OwnStore.fetchUserInfo()
        OwnStore.fetchUserRepos()
    }
    return (
        < div >
            <Form onSubmit={subAndSearh} >
                <Input
                    value={name}
                    icon='users'
                    iconPosition='left'
                    placeholder='Search users...'
                    onChange={(event) => { setName(event.target.value) }}
                />
            </Form>
        </div >
    )
}
export default observer(Header)
