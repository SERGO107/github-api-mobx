
import { makeAutoObservable, runInAction } from "mobx"
import { createContext } from 'react'


class Store {
    userLogin = ''
    userAvatar = ''
    id = 1
    imageUrl = `https://rickandmortyapi.com/api/character/avatar/1.jpeg`
    created = ''
    repos = ''
    followers = ''
    page = 1
    fullName = ''
    descriptionRepos
    reposName
    dataRepos = []
    perPage = 5
    slicedRepos = []
    setOffset = 0
    selectedPage = 1
    constructor() {
        //со значением автообсервбл не нужно расставлять декораторы (@action, @observeble, @computed,@reaction) теперь mobx распознает значения автоматически
        makeAutoObservable(this)
    }

    handleSubmit = (name) => {
        console.log(name)
        this.userLogin = name
    }

    async fetchUserInfo() {
        const character = this.userLogin
        const response = await fetch(`https://api.github.com/users/${character}`)
        const data = await response.json()
        runInAction(() => {
            this.imageUrl = data.avatar_url
            this.created = data.created_at
            this.repos = data.public_repos
            this.followers = data.followers
            this.fullName = data.name
            console.log(data)
        })
    }


    async fetchUserRepos() {
        const character = this.userLogin
        const page = this.page
        const response = await fetch(`https://api.github.com/users/${character}/repos?page=2&per_page=100&page=${page}`)
        const data = await response.json()
        runInAction(() => {
            this.dataRepos = data
            this.slicedRepos = data.slice(this.setOffset, this.setOffset + this.perPage)
            console.log(data)
        })
    }
    handlePageClick = (e) => {
        this.selectedPage = e.selected;
        this.setOffset = this.selectedPage * this.perPage
        this.slicedRepos = this.dataRepos.slice(this.setOffset, this.setOffset + this.perPage)
    };

    nextHundred = () => {
        this.page = this.page + 1
        this.fetchUserRepos()
    }
    prevHundred = () => {
        this.page = this.page - 1
        this.fetchUserRepos()
    }

}
//чтобы испоьзовать данные из стора в реакт компонентах нужно обернуть стор в реакт контекст
export default createContext(new Store())
