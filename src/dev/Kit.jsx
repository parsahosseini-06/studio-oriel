// DEV ONLY component review. Loaded only when import.meta.env.DEV. Never ships. Remove in Phase 15.
import Button from '../components/custom/Button.jsx'
import TextLink from '../components/custom/TextLink.jsx'
import ArrowIcon from '../components/custom/ArrowIcon.jsx'
import Panel from '../components/custom/Panel.jsx'
import DuotoneImage from '../components/custom/DuotoneImage.jsx'
import SpecList from '../components/custom/SpecList.jsx'
import Field from '../components/custom/Field.jsx'

const box = { display: 'grid', gap: 'var(--space-4)', marginBlockStart: 'var(--space-4)' }

export default function Kit() {
  return (
    <section className="section" id="kit" aria-label="Component kit (dev only)">
      <div className="wrap">
        <p className="mono-label" style={{ color: 'var(--color-text-muted)' }}>DEV ONLY: component kit, not shipped</p>
        <h2 className="heading">Kit</h2>

        <h3 className="title" style={{ marginBlockStart: 'var(--space-8)' }}>Button</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-4)', marginBlockStart: 'var(--space-4)' }}>
          <Button>Default</Button>
          <Button disabled>Disabled</Button>
          <Button href="#kit">As link</Button>
        </div>

        <h3 className="title" style={{ marginBlockStart: 'var(--space-8)' }}>TextLink</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-4)', marginBlockStart: 'var(--space-4)' }}>
          <TextLink href="#kit">Default</TextLink>
          <TextLink href="#kit" mono>Mono</TextLink>
          <TextLink href="#kit">View the project <ArrowIcon /></TextLink>
          <TextLink disabled>Disabled</TextLink>
        </div>

        <h3 className="title" style={{ marginBlockStart: 'var(--space-8)' }}>Panel and SpecList</h3>
        <Panel style={{ marginBlockStart: 'var(--space-4)' }}>
          <p>Panel text stays at forty characters wide so paragraphs next to images read calmly.</p>
          <SpecList items={[{ term: 'Place', value: 'Placeholder' }, { term: 'Year', value: '2024' }, { term: 'Type', value: 'House' }]} />
        </Panel>

        <h3 className="title" style={{ marginBlockStart: 'var(--space-8)' }}>DuotoneImage with overlay</h3>
        <div style={{ maxInlineSize: 'min(100%, 480px)', marginBlockStart: 'var(--space-4)' }}>
          <DuotoneImage src="/images/photo-1.jpg" alt="Concrete facade with a grid of narrow windows." width={1400} height={1280} ratio="35 / 32">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" width="100%" height="100%" aria-hidden="true" fill="none" stroke="var(--color-surface)" strokeWidth="0.4">
              <path d="M10 10H90V90H10Z M10 50H90" />
            </svg>
          </DuotoneImage>
        </div>

        <h3 className="title" style={{ marginBlockStart: 'var(--space-8)' }}>Field</h3>
        <form style={{ ...box, maxInlineSize: '480px' }} onSubmit={(e) => e.preventDefault()} noValidate>
          <Field label="Name" name="kit-name" help="Default with a hint." />
          <Field label="Email" name="kit-email" type="email" defaultValue="not-an-email" error="Enter an email address like name@example.com." />
          <Field label="Message" name="kit-msg" multiline />
          <Field label="Disabled" name="kit-dis" disabled defaultValue="Muted" />
        </form>
      </div>
    </section>
  )
}
