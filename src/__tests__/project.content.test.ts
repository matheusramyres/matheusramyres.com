import { describe, expect, it } from 'vitest';
import { ProjectContent } from '../domains/project/project.content';

describe('ProjectContent', () => {
  it('has project cards', () => {
    expect(Array.isArray(ProjectContent.projectCards)).toBe(true);
    expect(ProjectContent.projectCards.length).toBeGreaterThan(0);
  });

  it('first project has repository or productionUrl', () => {
    const first = ProjectContent.projectCards[0];
    expect(first).toBeDefined();
    expect(first.repository || first.productionUrl).toBeTruthy();
  });
});
