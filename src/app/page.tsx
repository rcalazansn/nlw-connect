import { Button } from "@/components/button";
import { IconButton } from "@/components/IconButton";
import { InputField, InputIcon, InputRoot } from "@/components/input";
import { ArrowRight, Mail } from 'lucide-react';

export default function Home() {
  return (
    <main>
      <div>Hello world!</div>

      
      <Button>
        Enviar
        <ArrowRight/>
      </Button>

      <IconButton>
        <ArrowRight/>
      </IconButton>

<div>
<InputRoot>
    <InputIcon>
      <Mail className="size-5"/>
    </InputIcon>
    <InputField/>
</InputRoot>

<InputRoot>
  
    <InputField/>
    <InputIcon>
      <Mail className="size-5"/>
    </InputIcon>
</InputRoot>

</div>

    </main>
  );
}
