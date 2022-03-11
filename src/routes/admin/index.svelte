
<script lang="ts">
  import Personnummer from 'personnummer';

    type User = {
      firstName: string
      lastName: string
      ssn: string
    }
    type UserValidation = {
      firstName: boolean
      lastName: boolean
      ssn: boolean
      address1: boolean
      address2: boolean
      zip: boolean
      city: boolean
      telephone: boolean
      email: boolean
    }
    
    export let user: User;

    const editedUser: User = { ...user };

    const fieldNameMap = {
      firstName: "Förnamn",
      lastName: "Efternamn",
      ssn: "Födelsedatum (ÅÅMMDDXXXX)",
      address1: "Adress 1",
      address2: "Adress 2",
      zip: "Postkod",
      city: "Postort",
      telephone: "Telefon",
      email: "Epost"
    }
    
    const userValidation: UserValidation  = {
      firstName: true,
      lastName: true,
      ssn: true,
      address1: true,
      address2: true,
      zip: true,
      city: true,
      telephone: true,
      email: true
    };

    const dateOfBirthHandler = (id: string, value: string) => {
      if (value === '' || value.length < 10) return;

      let formattedValue = value.replaceAll('-', '').trim();
      if (Personnummer.valid(formattedValue)) {
        if (formattedValue.length === 12) {
          formattedValue = formattedValue.substring(2, formattedValue.length);
        }
        editedUser.ssn = formattedValue;
        userValidation[id] = true;
      } else {
        userValidation[id] = false;
      }
    }

    const handleChange = (e) => {
      switch (e.target.id) {
        case 'ssn':
          return dateOfBirthHandler(e.target.id, e.target.value);
        default:
          return;
      }
    }

    let title = '';
    $: {
      title = `My portfolio - ${editedUser.firstName} ${editedUser.lastName}`;
    }

</script>

<svelte:head>
  <title>Admin - {title}</title>
</svelte:head>

<h1>Admin</h1>
<p>Do admin stuff here</p>

<form>

  {#each Object.keys(editedUser) as key}
    <label class={
      `lmp-input-wrapper lmp-input-wrapper-${key}
      ${userValidation[key] ? '' : 'lmp-input-wrapper-invalid'}
      ${editedUser[key] === '' ? '' : 'lmp-input-wrapper-set'}`
      }>
      <span>{fieldNameMap[key]}</span>
      <input id={key} type='text' placeholder={fieldNameMap[key]} bind:value={editedUser[key]} on:keyup={handleChange} />
    </label>    
  {/each}
  

</form>


<pre>
  <code>
    {JSON.stringify(editedUser)}
  </code>
</pre>

<a href='/'>Back</a>

<style>

form {
    width:90vw;
    max-width:768px;
    border:1px solid #ddd;
    padding:3vw;
    display:flex;
    flex-wrap: wrap;
    flex-direction:row;
    border-radius:5px;
    margin: 0 auto;
}

.lmp-input-wrapper {
    min-width: 30vw;
    flex-grow: 1;
    margin-bottom:15px;
    position:relative;
    border-bottom:1px solid #ddd;
}

.lmp-input-wrapper-invalid {
  border-bottom: 1px solid red;
}

.lmp-input-wrapper-address1,
.lmp-input-wrapper-address2 {
  width: 100%;
}

.lmp-input-wrapper input{
    width:100%;
    padding:10px 0px;
    margin-top:20px;
    border:none;
    outline:none;
}
.lmp-input-wrapper input::placeholder {
    opacity:0;
}
.lmp-input-wrapper span {
    position:absolute;
    top:0;
    left:0;
    transform:translateY(30px);
    font-size:0.825em;
    transition-duration:300ms;
}

.lmp-input-wrapper-set > span,
.lmp-input-wrapper:focus-within > span,
.lmp-input-wrapper input:not(:placeholder-shown) + span{
    color:purple;
    transform:translateY(0px);
}


.lmp-input-wrapper-invalid input,
.lmp-input-wrapper-invalid:focus-within > span,
.lmp-input-wrapper-invalid span {
  color: red;
}

pre {
  white-space: pre-wrap;
  width: 750px;
  margin: 0 auto;
  tab-size: 4;
  padding: 20px;
}

code {
  text-align: left;
}

</style>