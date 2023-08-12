import { Button, Text, TextInput } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Form, FormAnnotation } from './styles'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/router'

const ClaimUsernameFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'User must have at least 3 letters.' })
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
    formState: { errors, isSubmitting },
  } = useForm<ClaimUsernameFormData>({
    resolver: zodResolver(ClaimUsernameFormSchema),
  })

  const router = useRouter()

  async function handleClaimUsername(data: ClaimUsernameFormData) {
    const { username } = data

    await router.push(`/register?username=${username}`)
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
        <Button size="sm" type="submit" disabled={isSubmitting}>
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
