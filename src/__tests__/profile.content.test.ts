import { describe, expect, it } from 'vitest';
import { profileContent } from '../domains/profile/profile.content';

describe('profileContent', () => {
  it('has required fields', () => {
    expect(profileContent.name).toBeTruthy();
    expect(profileContent.email).toBeTruthy();
    expect(profileContent.role).toBeTruthy();
  });

  it('email looks valid', () => {
    expect(profileContent.email).toContain('@');
  });
});
