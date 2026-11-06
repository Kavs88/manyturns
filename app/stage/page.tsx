import { redirect } from 'next/navigation';

/**
 * Obsolete Stage venture door + GlobalNavDrawer portfolio — quarantined (MT-C seq 3).
 * Not part of the locked journey map. Redirect to house.
 */
export default function StageQuarantined() {
  redirect('/');
}
