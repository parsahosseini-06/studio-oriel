#!/usr/bin/env python3
"""WCAG 2.x contrast checker for Studio Oriel tokens. Usage: python3 design/tools/contrast.py
Method: sRGB channel c/255 -> linear (c<=0.03928 ? c/12.92 : ((c+0.055)/1.055)^2.4);
L = 0.2126 R + 0.7152 G + 0.0722 B; ratio = (L_hi + 0.05) / (L_lo + 0.05).
Semi-transparent colours are first composited over their background (alpha mix in sRGB)."""
T={'bg':'#E9EDEF','surface':'#F4F6F7','text':'#1D2226','muted':'#46555F','border':'#6F8190','accent':'#C73E2C','accent-hover':'#A5301F','on-accent':'#FFFFFF','inverse':'#1D2226','on-inverse':'#FFFFFF','success':'#2F6B4F','danger':'#B3261E'}
# sampled photo tones under the duotone grade (hero photo, 1440 screenshot reading): sky, mid, dark, very dark
PHOTO={'photo-sky':'#BCCDD9','photo-mid':'#8A97A1','photo-dark':'#5A6670','photo-vdark':'#2F373D'}
def _lin(c):
    c/=255
    return c/12.92 if c<=0.03928 else ((c+0.055)/1.055)**2.4
def lum(h):
    h=h.lstrip('#');r,g,b=[int(h[i:i+2],16) for i in (0,2,4)]
    return 0.2126*_lin(r)+0.7152*_lin(g)+0.0722*_lin(b)
def ratio(a,b):
    x,y=lum(a),lum(b);hi,lo=max(x,y),min(x,y);return (hi+0.05)/(lo+0.05)
def mix(fg,bg,a):
    f=[int(fg.lstrip('#')[i:i+2],16) for i in (0,2,4)];g=[int(bg.lstrip('#')[i:i+2],16) for i in (0,2,4)]
    return '#%02X%02X%02X'%tuple(round(a*x+(1-a)*y) for x,y in zip(f,g))
# (label, fg, bg, required, kind)
PAIRS=[
 ('text on bg',T['text'],T['bg'],4.5,'text'),
 ('text on surface',T['text'],T['surface'],4.5,'text'),
 ('text-muted on bg',T['muted'],T['bg'],4.5,'text'),
 ('text-muted on surface',T['muted'],T['surface'],4.5,'text'),
 ('on-accent on accent (CTA label)',T['on-accent'],T['accent'],4.5,'text'),
 ('on-accent on accent-hover',T['on-accent'],T['accent-hover'],4.5,'text'),
 ('on-inverse on inverse (label bar, plan toggle)',T['on-inverse'],T['inverse'],4.5,'text'),
 ('on-inverse 75% on inverse (secondary link in bar)',mix(T['on-inverse'],T['inverse'],.75),T['inverse'],4.5,'text'),
 ('success on surface',T['success'],T['surface'],4.5,'text'),
 ('success on bg',T['success'],T['bg'],4.5,'text'),
 ('danger on surface',T['danger'],T['surface'],4.5,'text'),
 ('danger on bg',T['danger'],T['bg'],4.5,'text'),
 ('border on bg (field and panel outlines)',T['border'],T['bg'],3,'ui'),
 ('border on surface',T['border'],T['surface'],3,'ui'),
 ('accent on bg (focus ring, underline, pin on paper)',T['accent'],T['bg'],3,'ui'),
 ('accent on surface (focus ring, pin dot vs its paper ring)',T['accent'],T['surface'],3,'ui'),
 ('focus-on-photo ink vs paper (inner/outer ring pair)',T['text'],T['surface'],3,'ui'),
]
# pin ring over photos: best of paper ring / ink hairline must reach 3:1 on every sampled photo tone
for n,c in PHOTO.items():
    best=max(ratio(T['surface'],c),ratio(T['text'],c))
    PAIRS.append(('pin keyline (best of paper or ink ring) on '+n+' '+c,T['surface'] if ratio(T['surface'],c)>=ratio(T['text'],c) else T['text'],c,3,'ui'))
# rejected / failing preview values, kept as evidence
EVIDENCE=[
 ('preview coord label colour #6F8190 on bg',"#6F8190",T['bg'],4.5,'text'),
 ('preview plan axis #8795A0 on surface','#8795A0',T['surface'],3,'ui'),
 ('preview pin ring accent alone on photo-sky',T['accent'],PHOTO['photo-sky'],3,'ui'),
 ('preview pin ring accent alone on photo-mid',T['accent'],PHOTO['photo-mid'],3,'ui'),
 ('preview pin ring accent alone on photo-dark',T['accent'],PHOTO['photo-dark'],3,'ui'),
 ('accent used as text on bg',T['accent'],T['bg'],4.5,'text'),
]
def rows(P):
    return [(n,f,b,ratio(f,b),req,k) for n,f,b,req,k in P]
if __name__=='__main__':
    for title,P in (('TOKENS',PAIRS),('PREVIEW VALUES (evidence)',EVIDENCE)):
        print(title)
        for n,f,b,r,req,k in rows(P): print('%-62s %s on %s  %5.2f:1  need %.1f  %s'%(n,f,b,r,req,'PASS' if r>=req else 'FAIL'))
