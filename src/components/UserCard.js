import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import { observer } from 'mobx-react-lite'
import Store from '../store'
import { useContext } from 'react'
import './UserCard.css'
// import { useQuery } from 'react-query'

export const UserCard = () => {
    const OwnStore = useContext(Store)
    return (
        <div class="Card">
            <Card
                centered
            >
                <Image src={OwnStore.imageUrl} wrapped ui={false} />

                <Card.Content>
                    <Card.Header><p>{OwnStore.fullName}</p></Card.Header>
                    <Card.Meta>Joined in {OwnStore.created}</Card.Meta>
                    <Card.Description>
                        Public repos {OwnStore.repos}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='user' />
                        {OwnStore.followers} Followers
                    </a>
                </Card.Content>
            </Card>
        </div>
    )
}

export default observer(UserCard)



