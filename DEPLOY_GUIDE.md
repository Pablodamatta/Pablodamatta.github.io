# 🚀 Guia Prático de Atualização & Deploy

Este guia detalha os 3 passos para colocar seu novo perfil e seu site portfólio no ar.

---

## 1. Atualizar o README do seu Perfil GitHub

O novo conteúdo profissional está salvo em:
[`scratch/README_perfil.md`](file:///home/pablodamatta/.gemini/antigravity/scratch/README_perfil.md)

### Como aplicar:

#### Opção A (Direto pelo navegador no GitHub - Mais rápido):
1. Acesse: **https://github.com/Pablodamatta/Pablodamatta/edit/main/README.md**
2. Substitua todo o conteúdo pelo texto do arquivo [`README_perfil.md`](file:///home/pablodamatta/.gemini/antigravity/scratch/README_perfil.md).
3. Clique em **"Commit changes..."** e pronto!

#### Opção B (Pelo terminal via Git):
```bash
# Clone seu repositório de perfil (caso não tenha clonado)
cd /home/pablodamatta/.gemini/antigravity/scratch
git clone git@github.com:Pablodamatta/Pablodamatta.git repo_perfil
cp README_perfil.md repo_perfil/README.md
cd repo_perfil
git add README.md
git commit -m "docs: reformula perfil profissional destacando PO, QA e novos projetos"
git push origin main
```

---

## 2. Como tirar "SoftexJs" e "Copilot Mastering" dos Pinned do GitHub

No seu perfil do GitHub (`https://github.com/Pablodamatta`), esses dois repositórios estão fixados como **Popular repositories / Pinned**:

1. Acesse o seu perfil: **https://github.com/Pablodamatta**
2. Logo acima dos cards de repositórios, clique no botão à direita: **"Customize your pins"**.
3. Na janela que abrir:
   - **Desmarque** o `SoftexJs`
   - **Desmarque** o `Mastering-GitHub-Copilot-for-Paired-Programming`
   - **Marque** o `automacao-testes-luma`
   - *(Dica: Quando você subir o `radar-carreira` pro seu GitHub, marque ele aqui também!)*
4. Clique em **"Save pins"**.

---

## 3. Como Hospedar o Site Portfólio Grátis no GitHub Pages

O código do seu portfólio está completo e pronto na pasta:
`/home/pablodamatta/.gemini/antigravity/scratch/portfolio`

Para ter seu site no ar com o endereço oficial **`https://pablodamatta.github.io`**:

### Passo a Passo no GitHub:
1. Crie um novo repositório público no GitHub chamado exatamente:
   **`Pablodamatta.github.io`**
   *(Atenção: repositórios com o nome `username.github.io` são automaticamente ativados pelo GitHub Pages como o seu site principal!)*

2. No seu terminal, suba os arquivos do portfólio:
```bash
cd /home/pablodamatta/.gemini/antigravity/scratch/portfolio

# Inicializa o git e cria o primeiro commit
git init -b main
git add .
git commit -m "feat: site portfolio oficial Pablo da Matta"

# Conecta ao seu novo repositório no GitHub e envia
git remote add origin git@github.com:Pablodamatta/Pablodamatta.github.io.git
git push -u origin main
```

3. Pronto! Em 1 a 2 minutos, o GitHub Pages processa os arquivos e seu portfólio estará acessível publicamente em:
   👉 **https://pablodamatta.github.io**

---

## 4. Testar o Site Localmente (Agora mesmo)

Se quiser visualizar o site no seu navegador antes de subir:
```bash
cd /home/pablodamatta/.gemini/antigravity/scratch/portfolio
python3 -m http.server 8080
```
E abra no navegador: **http://localhost:8080**
