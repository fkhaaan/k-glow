import Link from "next/link";
import { FormEvent, useState } from "react";

import { Container } from "@/components/common/Container";
import { SEO } from "@/components/common/SEO";
import { Button } from "@/components/ui/Button";
import { authService } from "@/services/auth.service";

type RegisterErrors = {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
};

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<RegisterErrors>({});
  const [message, setMessage] = useState("");

  function validate() {
    const nextErrors: RegisterErrors = {};

    if (name.trim().length < 2) {
      nextErrors.name = "Enter your name.";
    }

    if (!email.includes("@")) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (password.length < 8) {
      nextErrors.password = "Password must be at least 8 characters.";
    }

    if (password !== confirmPassword) {
      nextErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");

    if (!validate()) {
      return;
    }

    authService.register({ name, email, password, confirmPassword });
    setMessage("Account created with a mock JWT-ready token.");
  }

  return (
    <>
      <SEO title="Register" canonicalPath="/auth/register" />
      <section className="py-12 sm:py-16">
        <Container size="narrow">
          <div className="grid overflow-hidden rounded-[8px] border border-[var(--color-line)] bg-white shadow-[0_28px_80px_rgba(31,27,24,0.08)] md:grid-cols-[0.9fr_1.1fr]">
            <div className="bg-[var(--color-soft)] p-8 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-rosewood)]">
                Join K-Glow
              </p>
              <h1 className="mt-4 font-serif text-4xl font-medium leading-tight text-[var(--color-ink)]">
                Build a skin profile for smarter rituals.
              </h1>
              <p className="mt-5 text-sm leading-7 text-[var(--color-muted)]">
                Registration is frontend-only for now, with payloads shaped for a future
                JWT authentication endpoint.
              </p>
            </div>

            <form className="p-8 sm:p-10" onSubmit={handleSubmit}>
              <label className="block text-sm font-semibold text-[var(--color-cocoa)]">
                Name
                <input
                  className="mt-2 h-12 w-full rounded-[8px] border border-[var(--color-line)] px-3 text-sm outline-none focus:border-[var(--color-rosewood)]"
                  onChange={(event) => setName(event.target.value)}
                  value={name}
                />
              </label>
              {errors.name ? (
                <p className="mt-2 text-sm text-[var(--color-rosewood)]">{errors.name}</p>
              ) : null}

              <label className="mt-5 block text-sm font-semibold text-[var(--color-cocoa)]">
                Email
                <input
                  className="mt-2 h-12 w-full rounded-[8px] border border-[var(--color-line)] px-3 text-sm outline-none focus:border-[var(--color-rosewood)]"
                  onChange={(event) => setEmail(event.target.value)}
                  type="email"
                  value={email}
                />
              </label>
              {errors.email ? (
                <p className="mt-2 text-sm text-[var(--color-rosewood)]">{errors.email}</p>
              ) : null}

              <label className="mt-5 block text-sm font-semibold text-[var(--color-cocoa)]">
                Password
                <input
                  className="mt-2 h-12 w-full rounded-[8px] border border-[var(--color-line)] px-3 text-sm outline-none focus:border-[var(--color-rosewood)]"
                  onChange={(event) => setPassword(event.target.value)}
                  type="password"
                  value={password}
                />
              </label>
              {errors.password ? (
                <p className="mt-2 text-sm text-[var(--color-rosewood)]">
                  {errors.password}
                </p>
              ) : null}

              <label className="mt-5 block text-sm font-semibold text-[var(--color-cocoa)]">
                Confirm Password
                <input
                  className="mt-2 h-12 w-full rounded-[8px] border border-[var(--color-line)] px-3 text-sm outline-none focus:border-[var(--color-rosewood)]"
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  type="password"
                  value={confirmPassword}
                />
              </label>
              {errors.confirmPassword ? (
                <p className="mt-2 text-sm text-[var(--color-rosewood)]">
                  {errors.confirmPassword}
                </p>
              ) : null}

              {message ? (
                <p className="mt-5 rounded-[8px] bg-[var(--color-soft)] p-3 text-sm font-semibold text-[var(--color-cocoa)]">
                  {message}
                </p>
              ) : null}

              <Button className="mt-6 w-full rounded-[8px]" type="submit">
                Register
              </Button>
              <p className="mt-5 text-center text-sm text-[var(--color-muted)]">
                Already have an account?{" "}
                <Link
                  className="font-semibold text-[var(--color-rosewood)]"
                  href="/auth/login"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
}
