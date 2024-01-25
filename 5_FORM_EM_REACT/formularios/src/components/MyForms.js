const MyForms = () => {
  return (
    <div>
        {/* 1 - Criação de form */}
        <form>
            <label htmlFor="name">Nome:</label>
            <input type="text" name="name" placeholder="Digite o seu nome" />
        </form>
        <input type="submit" value="Enviar" />
    </div>
  )
}

export default MyForms