import { Button, Text, TextInput } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Form, FormAnnotation } from './styles'
import { zodResolver } from '@hookform/resolvers/zod'

const ClaimUsernameFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'User must have at lest 3 words.' })
    .regex(/^([a-z\\-]+)$/i, {
      message: 'User must have only letters and hyphens.',
    })
    .transform((username) => username.toLocaleLowerCase()),
})

type ClaimUsernameFormData = z.infer<typeof ClaimUsernameFormSchema>

export function ClaimUsernameForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ClaimUsernameFormData>({
    resolver: zodResolver(ClaimUsernameFormSchema),
  })

  async function handleClaimUsername(data: ClaimUsernameFormData) {
    console.log(data)
  }

  const enableInput = (event: React.FocusEvent<HTMLInputElement>): void => {
    // readOnly and onFocus to remove autofill on chrome
    event.target.readOnly = false
  }

  return (
    <>
      <Form as="form" onSubmit={handleSubmit(handleClaimUsername)}>
        <TextInput
          size="sm"
          prefix="ignite.com/"
          placeholder="your-user"
          {...register('username')}
          readOnly
          onFocus={enableInput}
        />
        <Button size="sm" type="submit">
          Schedule
          <ArrowRight />
        </Button>
      </Form>
      <FormAnnotation>
        <Text size="sm">{errors.username && errors.username.message}</Text>
      </FormAnnotation>
    </>
  )
}
