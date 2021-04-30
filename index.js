/**
 * Instância a modal.
 */
class Modal {
  id = ""
  title = ""
  content = ""

  /**
   * Função que cria o html da modal.
   */
  create() {
    const html = `
      <div class="ui modal" id="${this.id}">
        <div class="header">${this.title}</div>
        <div class="scrolling content">
          ${this.content}
        </div>
      </div>
    `

    document.body.innerHTML += html
  }

  /**
   * Função que irá abrir a modal.
   */
  abrir = function () {
    $('#' + this.id).modal('show')
  }
}

/**
 * Builder da modal.
 */
class ModalBuilder {
  /**
   * Valor default do id.
   */
  id = "id-div-modal"

  /**
   * Valor default do titulo.
   */
  title = "Modal"

  /**
   * Valor default do conteudo.
   */
  content = "Conteudo"

  /**
   * Função que irá setar o id.
   */
  setId(id) {
    this.id = id
    return this
  }

  /**
   * Função que irá setar o titulo.
   */
  setTitle(title) {
    this.title = title
    return this
  }

  /**
   * Função que irá setar o conteudo.
   */
  setContent(content) {
    this.content = content
    return this
  }

  /**
   * Função que vai construir a modal.
   */
  build() {
    const modal = new Modal()
    modal.id = this.id
    modal.title = this.title
    modal.content = this.content

    return modal
  }
}

/**
 * Setando os valores para a modal.
 */
const modal = new ModalBuilder()
  .setId('modal-talk')
  .setTitle('Aqui é o meu título')
  .setContent("Aqui é o meu conteudo")
  .build()

/**
 * Obtem o botão.
 */
const button = document.getElementById('button-modal')

/**
 * Evento de click no botão que vai ser responsável por criar e abrir a modal.
 */
button.addEventListener('click', function () {
  modal.create()
  modal.abrir()
})